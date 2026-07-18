// KEANE3029-LAB CORE
const infect = (data) => {
    console.log("LAB STATUS: INFECTING...");
    return data.split('>').reduce((acc, part) => {
        const [k, v] = part.trim().split(' ');
        acc[k] = v;
        return acc;
    }, {});
};

export default infect;
