
const getFirstName = () => {
    return ['Prerak','Chintan','Jay','Arth','Jesse','Parth','Sunny','Khushboo','Pranshu','Milan','Saurabh','Dhruvin','Jigar','Mit','Meet','Desal','Vihit'][Math.floor(Math.random() * 17)]
}

const getLastName = () => {
    return ['Doshi','Patel','Kavathia','Shah','Earle','Bhensadia','Gandhi','Sonawane','Dixit','Mandalia','Hathi','Kesaia','Machi','Sheth','Bhavsar','Davaria','Modi'][Math.floor(Math.random() * 17)]
}

const getAge = () => {
    return Math.floor(Math.random() * 100)
}


export const makeData = () => {
    return Array(100).fill(0).map((elem,i) => {
       return elem = {'id': i, 'firstName':getFirstName(), 'lastName': getLastName(), 'age':getAge()}
    })
}