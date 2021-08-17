# Pop-Click Socket
## ความต้องการ-การพัฒนาพื้นฐาน
NodeJS V12++

## Library ที่ใช้งาน
- Angular 12
- NestJS
- socket.io
- SQLite

## วิธีการติดตั้ง (Developer)
- Client
<pre>$ cd client
$ npm install
</pre>
- Server
<pre>$ cd server
$npm install
</pre>

## วิธีการติดตั้ง (Production)
- Client
1. แก้ไข environment เพื่อให้ Client ทำการเรียกไปที่ Domain/IP ที่ต้องการที่
>client/src/environments/environment.prod.ts

2. ทำการสร้าง Source Code
<pre>$ cd client
$ ng build
</pre>
ฝั่ง Front-End จะทำการ Build Source Code ไปไว้ที่ server/src/client
- Server
1. ทำการสร้าง Source Code
<pre>$ cd server
$npm run build
</pre>
2. ทำการอัพโหลด Source Code ของฝั่ง Server ไปไว้บน Server
3. ทำการรันคำสั่งให้ Server ทำงาน
<pre>
$ npm run start:prod
</pre>
หรือ
<pre>
$ node dist/main
</pre>
## วิธีการเปลี่ยน State และ Media
- File Location
>client/src/app/click-action-component/click-action-component.component.ts
- Model
<pre>
  mediaState = [
    {
      score: 0,
      clickImage: "https://popcat.click/img/op.353767c3.png",
      unClickImage: "https://popcat.click/img/p.1e9d00be.png",
      sound: "assets/pop1.ogg"
    }
  ]
</pre>
###<i>** ผู้พัฒนาจะเพิ่ม State กี่ State ก็ได้</i>

ให้แก้ไข mediaState ดังนี้
<table>
  <tr>
    <th>
        Properties
    </th>
    <th>
        Value
    </th>
  </tr>
  <tr>
    <td>
        score
    </td>
    <td>
        คะแนนเมื่อถึงเกณฑ์จะเปลี่ยน mediaState
    </td>
  </tr>
  <tr>
    <td>
        clickImage
    </td>
    <td>
        ภาพที่จะแสดงตอนกดเมาส์
    </td>
  </tr>
  <tr>
    <td>
      unClickImage
    </td>
    <td>
      ภาพที่จะแสดงตอนปล่อยเมาส์
    </td>
  </tr>
  <tr>
    <td>
      sound
    </td>
    <td>
        เสียงขณะกด
    </td>
  </tr>
</table>

###ผิดพลาดประการใดขออภัยด้วย
