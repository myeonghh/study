# Checklist
* ## 자바스크립트는 버전별로 어떻게 변화하고 발전해 왔을까요?
    
    |년도|버전|공식 이름|특징|
    |:---:|:---:|:---:|---|
    |1997년|ES1|ECMAScript 1|초판|
    |1998년|ES2|ECMAScript 2|ISO/IEC 16262 국제 표준과 완전히 동일한 규격을 적용하기 위한 변경.|
    |1999년|ES3|ECMAScript 3|정규식, try/catch추가, switch추가, do-while 추가|
    ||ES4|ECMAScript 4|언어에 얽힌 정치적 차이로 인해 버려짐.|
    |2009년|ES5|ECMAScript 5|JSON 추가, 배열 forEach 메소드 추가, 객체 Object에 대한 getter/setter 추가|
    |2015년|ES6|ECMAScript 2015|let, const 키워드 추가, arrow 문법 지원, Array.find(), Array.findIndex () 추가|
    |2016년|ES7|ECMAScript 2016|제곱연산자(**) 추가, Array.includes 추가|
    |2017년|ES8|ECMAScript 2017|async/await 비동기 관련 처리 추가, Object, String 등에 기능 추가.|
    |2018년|ES9|ECMAScript 2018|Promise.finally, Async iteration, object rest/spread property 등 추가.|
    |2019년|ES10|ECMAScript 2020|flat, flatMap, Symbol.description, optional catch 등 추가.|


  * ### 자바스크립트의 버전들을 가리키는 ES5, ES6, ES2016, ES2017 등은 무엇을 이야기할까요?
    ❗ `ES => ECMAScript`  
    - 1990년대 Netscape는 Javascript를, MS사의 IE에서는 JScript를 사용했고 두 스크립트는 제각각이었다.  
    - 때문에  Netscape사는 표준화 기구, ECMA International에 JavaScript로 표준안을 만들자고 제안하였고 ECMA 표준이 생겼다.  
    - ECMA(European Computer Manufactures Association)의 약자로 ECMAScript는 `자바스크립트 언어의 표준`이다.
      
  * ### 자바스크립트의 표준은 어떻게 제정될까요?  
    
    Ecma International 기술 위원회 TC39가 ECMAScript 표준에 대한 업데이트된 사양을 만들고 배포하는 것을 담당하고 있다.
      
      |단계|설명|
      |:---:|---|
      |0단계|누구라도 고려할 가치가 있다고 생각하는 아이디어가 생기면 구체화하고 간단하게 작성하여 제출할 수 있다.|
      |1단계(제안)|커뮤니티 구성원들이 토론하고 추가로 개발하며, 일반적으로 어떻게 해결하는지 알아내고 아이디어를 구체화한다.|
      |2단계(초안)|정확한 구문, 의미 체계, API 등을 구체화하고 공식 사양 언어를 사용하여 해결 방법을 자세히 설명하는 단계이다.|
      |3단계(후보)|최종 초안이 완성되면 3단계로 최종 초안을 제출한다. 3단계로 제출한다는 것은 제안이 자바스크립트 엔진에서 구현될 준비가 되어 있다는 합의가 이루어졌다는 의미이다.|
      |4단계(완료)|이 단계에서는 기능이 완료된 상태이다. 이 최종 단계에 도달하려면 두 개 이상의 별개의 호환 구현에서 TC39의 test262 테스트 목록13에 있는 인수 테스트를 통과해야 한다.|
        
    이런 과정을 통해 제안이 자바스크립트 표준에 들어간다.
---

* ## 자바스크립트의 문법은 다른 언어들과 비교해 어떤 특징이 있을까요?
    1. 자바스크립트는 객체 기반의 스크립트 언어이다.

    2. 자바스크립트는 동적이며, 타입을 명시할 필요가 없는 인터프리터 언어이다.

    3. 자바스크립트는 객체 지향형 프로그래밍과 함수형 프로그래밍을 모두 표현할 수 있다.
   
    4. JavaScript는 HTML문서 내에 기술되고 HTML 문서와 함께 수행된다.
   ---   
* ## 자바스크립트에서 반복문을 돌리는 방법은 어떤 것들이 있을까요?
  
   ### 1. **for 문**   
   가장 널리 사용되는 루프 중 하나로, 배열 또는 특정 횟수 반복과 같은 모든 종류의 작업에 사용된다.
    
    ```javascript
    for(let i = 0; i < 5; i++){
      console.log(i); // => 0, 1, 2, 3, 4 출력
    }
    ```
  ### 2. **for in 문**  
  열거 가능한 모든 프로퍼티 키를 열거한다. 주로 객체의 속성들을 반복할때 쓰이며, 객체의 key에 접근이 가능하다. 배열로 대입할 경우 대상의 Index 를 조회한다.
  ```javascript
    // 객체
    let obj = {a : 1, b: 2, c: 3}
    for(let key in obj){
      console.log(key); // => a, b, c 출력
    }

    // 배열
    let arr = [1, 2, 3]
    for(let index in arr){
      console.log(index); // => 0, 1, 2 출력
    }
  ``` 
  ### 3. **for of 문**  
  이터러블 순회 전용. 이터러블에는 String, Array, Map, Set, DOM컬렉션(HTMLColletion, NodeList) 등이 있다.
  ```javascript
    let arr = [1, 2, 3];
    for(let item of arr){
      console.log(item); // => 1, 2, 3 출력
    }
  ``` 
  ### 4. **forEach 문**  
  배열 순회 전용 메소드. forEach문은 최대 3개의 매개변수를 가지는 콜백 함수가 존재한다.  

  ```javascript
    let arr = [1, 2, 3];

    arr.forEach(function(value, index, array){
      console.log(value); // => 1, 2, 3 출력
      console.log(index); // => 0, 1, 2 출력
      console.log(array); // => [1, 2, 3], [1, 2, 3], [1, 2, 3] 출력
    })
    /* -매개변수-  
    value : 현재 배열의 요소  
    index : 현재 배열 요소의 인덱스  
    array : 반복되는 배열(forEach문을 호출한 배열)*/
  ``` 
  
  ### 5. **while 문**  
  while문의 인자는 조건을 받는데 조건이 참일 경우 반복문을 실행하고, 거짓일 경우 반복이 멈추고 이후로 넘어간다.
  ```javascript
    let num = 0;
    while(num < 3){
      console.log(num); // => 0, 1, 2 출력
      num++;
    }
  ``` 
  ### 6. **do while 문**  
  테스트 조건이 거짓일 때 까지 지정된 구문을 실행하는 루프를 만든다. 루프를 한 번 이상 실행하려는 경우에 사용하며, 조건이 false인 경우에도 한번은 실행된다.
  ```javascript
    do{
      console.log("일단 한번은 실행 됨") // => "일단 한번은 실행 됨"
    }while (false);
  ``` 
  ### 7. **Object 객체 메소드 : 객체 순회 전용**  
    - **Object.keys(객체)** : 객체의 프로퍼티 '키'를 배열로 반환
      ```javascript
      let obj = {a : 1, b : 2, c : 3};
      
      let keys = Object.keys(obj);
      console.log(keys); // => ['a', 'b', 'c'] 출력
      ``` 
  - **Object.values(객체)** : 객체의 프로퍼티 '값'을 배열로 반환
      ```javascript
      let obj = {a : 1, b : 2, c : 3};
      
      let values = Object.values(obj);
      console.log(values); // => [1, 2, 3] 출력
      ``` 
  - **Object.entries(객체)** : 객체의 프로퍼티 [키, 값]을 배열로 반환
      ```javascript
      let obj = {a : 1, b : 2, c : 3};
      
      let entries = Object.entries(obj);
      console.log(entries); // => [['a', 1], ['b', 2], ['c', 3]] 출력
      ``` 
---
* ## 자바스크립트를 통해 DOM 객체에 CSS Class를 주거나 없애려면 어떻게 해야 하나요?
  먼저 DOM 객체에 접근한 후에 `classList.add` (클래스 추가), `classList.remove`(클래스 삭제) 등을 이용하면 된다.
  - ### 클래스 추가
  ```javascript
  domElement.classList.add('name');

  domElement.className += ' name'; // 공백도 추가해줘야 됨
  // ==> domElement라는 DOM객체에 "name"이라는 클래스를 추가
  ```
  - ### 클래스 삭제
  ```javascript
  domElement.classList.remove('name');
  // ==> domElement라는 DOM객체에서 "name"이라는 클래스를 삭제
  ```
  - ### 클래스 변경
  ```javascript
  domElement.classList.replace('name', 'newName');

  domElement.className = 'newName';
  // ==> domElement라는 DOM객체의 클래스이름을 newName으로 변경
  ```
  - ### 클래스 토글
  ```javascript
  domElement.classList.toggle('name');
  // ==> 만약 domElement의 클래스 목록에 'name'이 있으면 제거하고, 없으면 추가 
  ```
  * ## IE9나 그 이전의 옛날 브라우저들에서는 어떻게 해야 하나요?
    IE9 이하 브라우저는 `element.classList`를 지원 하지 않아서 `element.classList.add` 등을 사용할 수 없다.  

    대신  `element.className += 'name'` 으로 클래스를 추가하거나 Polyfill classList를 사용한다.
 ---
* ## 자바스크립트의 변수가 유효한 범위는 어떻게 결정되나요?
  ### ❗ **스코프(변수 유효 범위)**  
  ==> 식별자 접근 규칙에 따른 유효 범위  
    
  ### ❗ **스코프의 주요 규칙**
  1. 안쪽 스코프에서 바깥쪽 스코프로 접근할 수 있지만 반대는 불가능하다.
  2. 스코프는 중첩이 가능하다.
  3. 지역 변수는 전역 변수보다 우선순위가 더 높다. 
   
  <br>

  ## ✔ 지역 변수
  지역 변수란 블록, 함수 내에서 선언된 변수를 가리킨다. 이러한 지역 변수는 변수가 선언된 해당 블록 내에서만 유효하다.
  
    - ### **블록 스코프 변수**
      모든 코드 블록(함수, if문, for문, while문 등) 내에서 선언된 변수는 코드 블록 내에서만 유효하다.  
      👉 ` 변수 let, const` 
      ```javascript
      for(let i = 0; i <10; i++){
        let num = 10;
      }

      function func(){
        let num2 = 20;
      }

      console.log(num); // => ReferenceError: num is not defined
      console.log(num2); // => ReferenceError: num is not defined
      ```
      
    - ### **함수 스코프 변수**
      함수 내에서 선언된 변수는 함수 내에서만 유효하며 이를 함수 외부에서 참조할 수 없다.  
      👉 ` 변수 var`
      ```javascript
      for(let i = 0; i <10; i++){
        var num = 10;
      }

      function func(){
        var num2 = 20;
      }

      console.log(num); // => 10 출력
      console.log(num2); // => ReferenceError: num is not defined
      ```
  ## ✔ 전역 변수
  전역 변수란 블록, 함수의 외부에서 선언된 변수를 가리킨다. 이러한 전역 변수는 파일의 어느 영역에서나 접근할 수 있다.
  ```javascript
  let num = 10;

  function func(){
    console.log(num);
  }

  func(); // => 10 출력
  ```

  * ### `var`과 `let`으로 변수를 정의하는 방법들은 어떻게 다르게 동작하나요?
    ||var|let|const|
    |:-:|:-:|:-:|:-:|
    |재선언|⭕|❌|❌|
    |재할당|⭕|⭕|❌|
    |유효범위(Scope)|함수 스코프|블록 스코프|블록 스코프|

    
    **재선언** => 변수를 다시 선언하는 것  
    **재할당** => 변수 값만 다시 할당하는 것
---
* ## 자바스크립트의 익명 함수는 무엇인가요?
  - 익명 함수는 재사용 하지 않는, 한번만 사용할 함수를 위한 개념으로, 따로 함수의 이름을 갖지 않는 함수이다.
    ```javascript
    function(){
      console.log("Hello, world!");
    };
    ```
  - 익명 함수는 리터럴(Literal) 방식으로 변수에 담겨 사용한다. 리터럴(Literal) 방식이란 글자 뜻 그대로 "문자 그대로 읽히는 방식"을 의미하며, 일반적으로 변수에 데이터를 넣을 때 사용하는 방식이 리터럴 방식이다.
    ```javascript
    let sayHello = function(){
      console.log("Hello, world!");
    };

    sayHello(); // => "Hello, world!" 출력
    ```
  - 리터럴 방식으로 사용되는 익명 함수의 경우, 호이스팅 시 함수를 담는 변수의 선언부만 위로 올라가고, 익명 함수 자체는 호이스팅 되지 않기 때문에, 함수 선언부가 호출 위치보다 위에 있어야 한다.
    ```javascript
    sayHello(); // => Uncaught ReferenceError: Cannot access 'sayHello' before initialization

    let sayHello = function() {
      console.log("Hello, world!");
    };
      ```
    #### ❓ **호이스팅이란?**  
    호이스팅이란 변수나 함수가 어디서 선언이 되든지간에 최상단에 위치하게 되어 동일 스코프 에서는 어디서든 참조 할수 있다는 것을 말한다.

    ### ❗ **결론**  
    - 익명 함수는 함수 자체는 호이스팅 되지 않기때문에, 호출의 위치와 구현의 위치간에 순서가 알맞아야 하고, 한번만 사용하는 기능에 사용된다.
    - 단 한번만 사용되는 (재사용이 필요없는) 익명 함수의 경우 호이스팅 되지 않기 때문에 메모리 관리에 효과적이다.
---
* ## 자바스크립트의 Arrow function은 무엇일까요?
  
  화살표 함수(Arrow function)란 `function` 키워드 대신 `화살표(=>)` 를 사용하여 보다 간략한 방법으로 함수를 선언할 수 있는 함수이다.

  ### **✔ 화살표함수의 특징**
  1. #### (매개변수) => { 본문 }
     ```javascript
      // 일반 익명 함수
      let func = function(n){
      return n * n;
      };

      // 화살표 함수
      let arrow = (n) => {
      return n * n;
      };  
     ```

  2. #### 매개변수가 하나뿐인 경우 괄호 생략 가능
  3. #### 본문이  return [식 or 값] 뿐인 경우 { } 와  return 키워드 생략 가능
     ```javascript
      let arrow = (n) => {
      return n * n;
      };

      let arrow = n => n * n;
     ```

  4. #### 매개변수가 없을 경우에는 괄호 필수
     ```javascript
      let arrow = function () {
      return new Date();
      };

      let arrow = () => new Date();
     ```

  5. #### return 할 값이 객체인 경우는 괄호 필수
     ```javascript
      let arrow = n => ({a : b});
     ```

  6. #### 실행 컨텍스트 생성시 this를 바인딩 하지 않는다.
  7. #### 화살표함수는 익명 함수로만 사용할 수 있기 때문에, 함수를 호출하기 위해서는 표현식으로 써야한다.
  8. #### 콜백 함수로 사용할 수 있다.