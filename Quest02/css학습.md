### head 에 외부 css파일 연결
* `<link rel="stylesheet" href="index.css">`

### 리스트 아이템에 있는 온점 없애는 속성
* list-style: none;

### a 태그 밑줄 없애는 속성
* text-decoration: none;

### button 위에 커서 올리면 손가락 모양으로 바뀌게하는 속성
* cursor: pointer;
  
### 테두리 둥글게 만들기
* border-radius: ;

### input 창 클릭, 텍스트 입력시 테두리 삭제
* #search_input:focus {
    outline: none;
  }

### 태그 안의 속성 선택자
* :: 
* ex) input 태그 안에 placeholder 색상변경
  #search_input::placeholder {
    color: #dfe6ea;
  }

### html에서 띄어쓰기 하기
* `&nbsp;` 띄어쓰기 하고싶은 부분에 입력하면 된다.
