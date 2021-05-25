// //Bài 1 : Cho 1 chuỗi str_input. Viết chương trình đảo ngược chuỗi và in ra kết quả. (2đ)
// let str_input = 'data';
// let newString = '';
// for( let i = str_input.length - 1; i >=0 ; i--){
//     newString += str_input[i];
// }
// console.log(newString);
// //Bài 2 : Viết 1 chương trình với đầu vào là 1 chuỗi ký tự và in ra chuỗi đó với các ký tự đầu của chữ mỗi chữ được viết hoa. 


//Bài 3 : Viết một chương trình xóa các phần tử trùng của một mảng và in ra kết quả. (2đ)
// Đầu vào: 1 mảng
// Đầu ra: Mảng mới với các ký tự (hoặc số) không trùng nhau
 
// let arr=[1,2,3,3,4,5,4,4,4,5,5];
// let newArr = [...new Set(arr)];
// console.log(...newArr);


//Bai 4 Tạo dữ liệu của 3 nhân viên mindX (gồm tên, tuổi, mức lương, chức vụ). 
//Xây dựng chương trình quản lý nhân viên với các chức năng (Read, Create, Update, Delete)

// let mindX = [
//     {
//         id: 1,
//         ten: 'A',
//         tuoi: 20,
//         luong: 6000,
//         chucvu: 'nhan vien' ,
//     },

//     {
//         id: 2,
//         ten: 'B',
//         tuoi: 20,
//         luong: 7000,
//         chucvu:'nhan vien' ,
//     },

//     {
//         id: 3,
//         ten: 'C',
//         tuoi: 20,
//         luong: 800,
//         chucvu: 'nhan vien',
//     }

// ];



// let input = prompt('Enter C/R/U/D');

// if(input === 'C'){
//     let Name = prompt('Nhap ten :');
//     let Age = prompt('Nhap tuoi :');
//     let Salary = prompt('Nhap luong :');  
//     let Pos = prompt('Nhap chuc vu :');
//     let id = mindX.length + 1;

//     let newObj = {
//         id: id,
//         ten: Name,
//         tuoi: Age,
//         luong: Salary,
//         chucvu: Pos,
//     }

//     mindX.push(newObj);

//     for (let i = 0; i < mindX.length; i++) {
//         console.log(`id: ${mindX[i].id}`);
//         console.log(`ten: ${mindX[i].ten}`);
//         console.log(`tuoi: ${mindX[i].tuoi}`);
//         console.log(`luong: ${mindX[i].luong}`);
//         console.log(`chucvu: ${mindX[i].chucvu}`); 
//      }
// }

// else if (input === 'R'){
//     for (let i = 0; i < mindX.length; i++) {
//         console.log(`id: ${mindX[i].id}`);
//         console.log(`ten: ${mindX[i].ten}`);
//         console.log(`tuoi: ${mindX[i].tuoi}`);
//         console.log(`luong: ${mindX[i].luong}`);
//         console.log(`chucvu: ${mindX[i].chucvu}`); 
//      }
// }
// else if (input === 'U'){
//     let poSition =Number(prompt('Enter position'));

//     if(poSition < 1 || poSition > mindX.length){
//        alert('Not found');
//     }
//     else{
//         let newName = prompt('Enter new name');
//         mindX[poSition - 1].ten = newName ;

//         for (let i = 0; i < mindX.length; i++) {
//             console.log(`id: ${mindX[i].id}`);
//             console.log(`ten: ${mindX[i].ten}`);
//             console.log(`tuoi: ${mindX[i].tuoi}`);
//             console.log(`luong: ${mindX[i].luong}`);
//             console.log(`chucvu: ${mindX[i].chucvu}`); 
//          }
//         }
        
//     }
// else if(input === 'D'){
//         let poSition = Number(prompt('Enter position'));
//         if( poSition < 1 || poSition > mindX.length){
//            console.log('Not found');
//         }
//         else{
//             mindX.splice( poSition - 1,1);
            
//         for (let i = 0; i < mindX.length; i++) {
//             console.log(`id: ${mindX[i].id}`);
//             console.log(`ten: ${mindX[i].ten}`);
//             console.log(`tuoi: ${mindX[i].tuoi}`);
//             console.log(`luong: ${mindX[i].luong}`);
//             console.log(`chucvu: ${mindX[i].chucvu}`); 
//         }
//         }
//  }