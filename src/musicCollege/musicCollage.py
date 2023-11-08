from flask import Flask, request, send_file
from PIL import Image
import requests
from io import BytesIO
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/music_collage', methods=['GET'])
def generate_collage():
    image_links = [
        "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
        "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
        "https://i.natgeofe.com/k/ad9b542e-c4a0-4d0b-9147-da17121b4c98/MOmeow1_square.png",
        "https://i.natgeofe.com/k/ad9b542e-c4a0-4d0b-9147-da17121b4c98/MOmeow1_square.png",
        "https://i.natgeofe.com/k/ad9b542e-c4a0-4d0b-9147-da17121b4c98/MOmeow1_square.png"
    ]

    collage_width = 600
    collage_height = 400
    collage = Image.new("RGB", (collage_width, collage_height))

    cell_width = collage_width // 3
    cell_height = collage_height // 2

    cell_coordinates = [
        (0, 0),  # topleft
        (cell_width, 0),  # topright
        (2 * cell_width, 0),  # topright
        (0, cell_height),  # middleleft
        (cell_width, cell_height),  # middleright
        (2 * cell_width, cell_height)  # middleright
    ]

    for link, (x_offset, y_offset) in zip(image_links, cell_coordinates):
        response = requests.get(link)
        if response.status_code == 200:
            image_data = BytesIO(response.content)
            img = Image.open(image_data)

            img = img.resize((cell_width, cell_height))

            collage.paste(img, (x_offset, y_offset))

    collage.save("2x2_image_collage.jpg")

    return send_file("2x2_image_collage.jpg", mimetype='image/jpg')


if __name__ == '__main__':
    app.run(debug=True)