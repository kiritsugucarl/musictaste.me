from flask import Flask, request, jsonify
from flask_cors import CORS
import math

recommend = Flask(__name__)
CORS(recommend)

SPOTIFY_CLIENT_ID = "76119cfba3a9409fbf5db1c44014b7b3"
SPOTIFY_CLIENT_SECRET = "eaf50650429f46e0b42bffabc1c02666"

SPOTIFY_API_URL = "https://api.spotify.com/v1/"
SPOTIFY_TOKEN_URL = ""

def calculate_similarity(user_profile, song_features):
    distance = 0
    for feature in user_profile:
        distance += (user_profile[feature] - song_features.get(feature, 0)) ** 2
        
    return math.sqrt(distance)

@recommend.route('/music-taste', methods=['POST'])
def recommendSongs():
    data = request.get_json()
    
    # Get user input
    user_input = data.get('user_input', [])
    
    access_token = request.headers.get('Authorization', '').replace('Bearer ', '')
    
    user_profile = fetch_spotify_data(user_input, access_token)
    
    songs = []
    
    recommendedSongs = []
    for song in songs:
        similarity = calculate_similarity(user_profile, song['features'])
        recommendedSongs.append({'name': song['name'], 'artist': song['artist'], 'similarity': similarity})
    
    recommendSongs = sorted(recommendedSongs, key=lambda x: x[similarity])
    top_n_recommendations = recommendedSongs[:5] #get the top 5
    
    image_links = [song['image_link'] for song in top_n_recommendations]
    response = requests.post('http://localhost:3000/result', json={'image_links': image_links})
    
    return jsonify({'recommendations' : top_n_recommendations})

def fetch_spotify_data(user_input, access_token):
    # SPOTIFY API GOES HERE
    
    user_profile = {}
    
    for track_id in user_input:
        track_features = fetch_track_features(track_id, access_token)
        user_profile[track_id] = track_features
        
    return user_profile

# def get_spotify_access_token():

def fetch_track_features(track_id, access_token):
    url = f'{SPOTIFY_API_URL}audio-features/{track_id}'
    headers = {'Authorization': f'Bearer {access_token}'}
    
    response = requests.get(url, headers=headers)
    
    if response.status_code == 200:
        return response.json()
    else:
        print(f'Error fetching track features for {track_id}: {response.status_code}')
        return{}
    
    if __name__ == '__main__':
        app.run(debug=True, port=3000)