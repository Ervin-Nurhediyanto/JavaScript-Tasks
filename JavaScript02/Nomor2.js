// ===== No. 2 =====
// Buatlah program searching nama yang dapat dibatasi jumlah outputnya yang menerapkan  callback function dengan data sebagai berikut:
// const name = [
// ‘Abigail’, ‘Alexandra’, ‘Alison’,
// ‘Amanda’, ‘Angela’, ’Bella’,
// ‘Carol’, ‘Caroline’, ‘Carolyn’,
// ‘Deirdre’, ‘Diana’, ‘Elizabeth’,
// ‘Ella’, ‘Faith’, ‘Olivia’, ‘Penelope’]

// Contoh:
// searchName(“an”, 3, callback)

// Output: 
// [“Alexandra”,”Amanda”,”Angela”]

const name = [
  "Abigail", "Alexandra", "Alison",
  "Amanda", "Angela", "Bella",
  "Carol", "Caroline", "Carolyn",
  "Deirdre", "Diana", "Elizabeth",
  "Ella", "Faith", "Olivia", "Penelope"];

const limitData = (data, lim) => {
  const dataLimit = data.slice(0, lim);
  console.log(dataLimit);
}

const searchName = (keyword, limit, callback) => {
  const filterData = name.filter((item) => {
    return item.toLowerCase().indexOf(keyword.toLowerCase()) > -1
  });
  callback(filterData, limit);
}

searchName('el', 4, limitData);