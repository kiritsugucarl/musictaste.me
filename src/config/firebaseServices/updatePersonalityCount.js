import { getDatabase, ref, update } from "firebase/database";

const updatePersonalityCount = async (personality) => {
    const db = getDatabase();
    const personalityCountRef = ref(db, "personalitiesCount");

    try {
        await update(ref(personalityCountRef), {
            [personality]:
                (await get(personalityCountRef.child(personality))).val() + 1,
        });
        console.log(`${personality} count updated successfully.`);
    } catch (error) {
        console.error("Error updating personality count:", error);
    }
};

export default updatePersonalityCount;
