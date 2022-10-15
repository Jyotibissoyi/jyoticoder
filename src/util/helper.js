const getInf = {
    name: "lithium",
    week: "W3D6",
    topic: "Todays node js topic -- How to creat module and export it.",
};
function getBatchInf(){
    console.log(
    `Batch ${getInf.name}, current day ${getInf.week}, ${getInf.topic}`);
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();

    console.log(day);
    console.log(month);
    console.log(year);
}

module.exports.getBatchInf = getBatchInf;