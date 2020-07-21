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
  
  const search = (key, lim) => {
    const dataFilter = name.filter((item) => {
      return item.toLowerCase().indexOf(key.toLowerCase()) > -1;
    });
    const dataLimit = dataFilter.slice(0, lim);
    console.log(dataLimit);
  }
  
  const searchName = (keyword, limit, callback) => {
    callback(keyword, limit);
  }
  
  searchName('an', 3, search);