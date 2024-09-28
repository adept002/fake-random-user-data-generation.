const names = {
   USA: ['John Smith', 'Emily Johnson', 'Michael Brown'],
   Ukraine: ['Олександр Іваненко', 'Марія Петренко', 'Іван Коваленко'],
   Russia: ['Алексей Смирнов', 'Анна Иванова', 'Дмитрий Попов'],
};

const addresses = {
   USA: [
       '123 Main St, Springfield, IL 62701',
       '456 Maple Ave, Metropolis, NY 10001',
       '789 Broadway St, New York, NY 10007',
   ],
   Ukraine: [
       'вул. Лесі Українки, 12, Київ, 01601',
       'просп. Шевченка, 5, Харків, 61000',
       'вул. Соборна, 15, Львів, 79000',
   ],
   Russia: [
       'ул. Пушкина, д. 10, Москва, 101000',
       'пр-т Ленина, 22, Санкт-Петербург, 190000',
       'ул. Чехова, д. 5, Казань, 420000',
   ],
};

// Генерация случайного номера телефона
const generateRandomPhone = (region) => {
   const formats = {
       USA: '+1 (555) ###-####',
       Ukraine: '+380 (44) ###-##-##',
       Russia: '+7 (495) ###-##-##',
   };
   
   const format = formats[region] || formats['USA'];
   return format.replace(/#/g, () => Math.floor(Math.random() * 10));
};

// Генерация случайного идентификатора
const generateRandomID = () => {
   return Math.floor(Math.random() * 1000000); // Случайное число до 1 миллиона
};

const getRandomName = (region) => {
   const nameList = names[region] || names['USA'];
   return nameList[Math.floor(Math.random() * nameList.length)];
};

const getRandomAddress = (region) => {
   const addressList = addresses[region] || addresses['USA'];
   return addressList[Math.floor(Math.random() * addressList.length)];
};

const generateFakeData = (region, errors, seed, page) => {
   const data = [];
   for (let i = 0; i < 20; i++) {
       const name = getRandomName(region);
       const address = getRandomAddress(region);
       const phone = generateRandomPhone(region);
       const id = generateRandomID();  // Генерация случайного идентификатора
       
       data.push({
           id: id,
           number: i + 1 + (page - 1) * 20, // Номер записи
           name: name,
           address: address,
           phone: phone,
       });
   }
   return data;
};

module.exports = { generateFakeData };
