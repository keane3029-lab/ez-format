// KEANE3029-LAB CORE
const infect = (data) => {
    console.log("LAB STATUS: INFECTING...");
    return data.split('>').reduce((acc, part) => {
        const trimmed = part.trim();
        if (!trimmed) return acc;
        const spaceIndex = trimmed.indexOf(' ');
        if (spaceIndex === -1) return acc; // no value, skip malformed line
        const k = trimmed.slice(0, spaceIndex);
        const v = trimmed.slice(spaceIndex + 1).trim();
        acc[k] = v;
        return acc;
    }, {});
};

export default infect;
