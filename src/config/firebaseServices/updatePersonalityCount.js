import { getDatabase, ref, update, get } from "firebase/database";

const updatePersonalityCount = async (personality) => {
    const db = getDatabase();
    const personalityCountRef = ref(db, "personalitiesCount");

    try {
        const personalitySnapshot = await get(personalityCountRef);
        const currentValue = personalitySnapshot.val()[personality] || 0;

        await update(personalityCountRef, {
            [personality]: currentValue + 1,
        });

        console.log(`${personality} count updated successfully.`);
    } catch (error) {
        console.error("Error updating personality count:", error);
    }
};

export default updatePersonalityCount;
