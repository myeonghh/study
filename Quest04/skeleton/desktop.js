// 변수선언
let desktop;
let divButtons;
let folderCnt;
let iconCnt;
let iconSequence = 1;
let folderNum = 1;
let iconNum = 1;
let folderName;
let fileNames;
let tabNum;
let plusTab;
let tapArea;
let closeTabBtn;
let tab;
let folderBtn;
let iconBtn;
let initBtn;
let divMain;
let divOverlay;
let fileNameTexts;
let folderWindow;
let closeBtn;
let folderHeader;
let folderImg;
let folderArea;
let inputName;
let iconArea;
let iconImg;
let iconName;
let body;
let desktopNum = 1;
let tabNames;
let desktops;

class Tab {
	constructor(){
		this.createTab();
		this.plusTab();
	}	
	createTab(){
		
		// 탭들 모아놓을 구역 생성
		let headerTab = document.createElement('header');
		headerTab.setAttribute('class', 'headerTab');
		body.appendChild(headerTab);

		tapArea = document.createElement('div');
		tapArea.setAttribute('class', 'tabArea');
		headerTab.appendChild(tapArea);
		// 디폴트 데스크탑 탭 추가
		let defaultTab = document.createElement('div');
		defaultTab.setAttribute('class', 'tab defaultTab');
		defaultTab.innerHTML = `바탕화면1`;
		tapArea.appendChild(defaultTab);
		//탭 추가하는 구역 추가
		plusTab = document.createElement('div');
		plusTab.setAttribute('class', 'tab plusTab');
		plusTab.innerHTML = '➕';
		headerTab.appendChild(plusTab);
	}
	// 바탕화면 탭 추가시켜주는 클릭 이벤트 
	plusTab(){
		tabNum = 2;
		
		plusTab.addEventListener('click', function(){
						
			tab = document.createElement('div');
			tab.setAttribute('class', `tab`)
			tab.setAttribute('id', tabNum);
			tapArea.appendChild(tab);

			let tabName = document.createElement('span');
			tabName.setAttribute('class', `tabName tabName${tabNum}`);
			tabName.setAttribute('id', tabNum);
			tabName.innerHTML = `바탕화면${tabNum}`;
			tab.appendChild(tabName);

			closeTabBtn = document.createElement('button');
			closeTabBtn.setAttribute('class', 'closeTabBtn');
			closeTabBtn.innerHTML = 'X';
			tab.appendChild(closeTabBtn);
			
			closeTabBtn.addEventListener('click', function(){
				(this.parentNode).parentNode.removeChild(this.parentNode);
			});

			// 바탕화면 새로 생성
			let myNewDesktop = new NewDesktop();

			new ChangeDesktop(tabName, tabNum);

			tabNum++;
		});
	};
};

class Desktop {
	/* TODO: Desktop 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
			// desktop 요소 
	constructor(){
		
	};
	
	createDivide(){
		
		desktop = document.createElement('section');
		desktop.setAttribute('class', 'desktop');
		desktop.setAttribute('id', desktopNum);
		body.appendChild(desktop);
		//html 구역 요소 추가부분(틀)
		divButtons = document.createElement('div');
		divButtons.setAttribute('class', 'buttonsArea');
		desktop.appendChild(divButtons);

		divMain = document.createElement('div');
		divMain.setAttribute('class', 'main');
		desktop.appendChild(divMain);

		divOverlay = document.createElement('div');
		divOverlay.setAttribute('class', 'overlay');
		desktop.appendChild(divOverlay);
	
		folderBtn = document.createElement('button');
		folderBtn.setAttribute('class', 'topButton folderBtn');
		folderBtn.innerHTML = '폴더 생성';
		divButtons.appendChild(folderBtn);
		// 아이콘 생성버튼 추가
		iconBtn = document.createElement('button');
		iconBtn.setAttribute('class', 'topButton iconBtn');
		iconBtn.innerHTML = '아이콘 생성';
		divButtons.appendChild(iconBtn);
		// 바탕화면 초기화버튼 추가
		initBtn = document.createElement('button');
		initBtn.setAttribute('class', 'topButton initBtn');
		initBtn.innerHTML = '바탕화면 초기화';
		divButtons.appendChild(initBtn);
		

		folderBtn.addEventListener('click', function(){
			folderCnt = Number(prompt('폴더를 몇개 만들까요?'));
				//폴더 만드는 함수 부르기
			let myFolder = new Folder(folderCnt);
			myFolder.createFolder();				
		});
		// 아이콘 생성버튼 클릭시 아이콘생성 기능추가
		iconBtn.addEventListener('click', function(){
			iconCnt = Number(prompt('아이콘을 몇개 만들까요?'));
			let myIcon = new Icon(iconCnt);
			myIcon.createIcon();
		});	
		// 초기화버튼 초기화 기능 추가
		initBtn.addEventListener('click', function(){
			divMain.innerHTML = '';
			divOverlay.innerHTML = '';
			folderNum = 1;
			iconNum = 1;
		});

		desktopNum++;
	}	
};

class NewDesktop extends Desktop{
	constructor(){
		super();
		this.createDivide();
	};

	createDivide(){
		super.createDivide();
		desktop.style.display = 'none';
	};
};

class ChangeDesktop {
	constructor(tabName, tabNum){
		this.tabName = tabName;
		this.tabNum = tabNum;
		this.changeDesktop();
	};
	changeDesktop(){
		tabNames = document.querySelectorAll('.tabName');
		desktops = document.querySelectorAll('.desktop');

		console.log('탭ddd네임', desktops);
		
		tabNames.forEach(function(tabName){
			desktops.forEach(function(desktop){
				tabName.addEventListener('click', function(){
					if(tabName.getAttribute('id') === desktop.getAttribute('id')){	
						desktop.style.display = 'block';
					}else{
						desktop.style.display = 'none';
					}		
				})
			})
		})				
	}
};


class Drag {
	constructor(dragItem){
		this.dragItem = dragItem;
		
		this.dragfile();
	}
	// 드래그 앤 드롭 기능 함수!!!!!!!!!!!!!!!
	dragfile(){
		let dragItemCopy = this.dragItem;
		console.log('드래그 아이템!!', dragItemCopy);
		dragItemCopy.dataset.left = dragItemCopy.offsetLeft;
		dragItemCopy.dataset.top = dragItemCopy.offsetTop;

		let isDragging = false;
		let originLeft = null;
		let originTop = null;
		let originX = 0;
		let originY = 0;

		dragItemCopy.addEventListener('mousedown', function(e){
			e.preventDefault();
			isDragging = true;
			originX = e.clientX;
			originY = e.clientY;
			originLeft = dragItemCopy.offsetLeft;
			originTop = dragItemCopy.offsetTop;
		});
		document.addEventListener('mousemove', function(e){
			e.preventDefault();
			if(!isDragging){
				return;
			}			
			const diffX = e.clientX - originX;
			const diffY = e.clientY - originY;		
			dragItemCopy.style.left = `${originLeft - dragItemCopy.dataset.left + diffX}px`;
			dragItemCopy.style.top = `${originTop - dragItemCopy.dataset.top + diffY}px`;
		});
		document.addEventListener('mouseup', function(e){
			e.preventDefault();
			isDragging = false;
		});
	};
}

class ChangeName {
	constructor(fileName){
		this.fileName = fileName;
		this.changeName();
	}
	// 파일(폴더, 아이콘) 이름 변경시켜주는 함수!!!!!
	changeName(){
		let fileNameCopy = this.fileName;
		fileNameCopy.addEventListener('dblclick', function(){
			console.log('파일이름텍스트 요소테스트', this);
			
			// 부모요소인 fileArea 선언
			let fileArea = this.parentNode;
			// 파일이름 원본 숨기기
			this.style.display = 'none';
			// 이름 변경할 수 있는 input 요소 만들어서 추가
			inputName = document.createElement('input');
			inputName.setAttribute('type', 'text');
			inputName.setAttribute('class', 'inputArea');
			inputName.setAttribute('value', this.innerText);
			inputName.setAttribute('maxlength', '10');
			fileArea.appendChild(inputName);
			inputName.focus();
			inputName.value = '';
			inputName.value = this.innerText;
			
			// input창에서 이름을 변경하고 엔터키를 누르면 이름 변경되게 기능 추가
			inputName.addEventListener('keyup', function(e){
				e.stopImmediatePropagation();
				e.preventDefault();
				if(e.keyCode !== 13){// => keyCode 13번 => 엔터키
					return;
				};					
				// 사용자가 문자, 숫자를 입력하지 않고 공백만 입력했을 경우
				if(this.value.length === (this.value).split(' ').length - 1){
					alert('파일 이름을 입력해 주세요!');
					return;
				}
				// 파일 이름 중복 확인
				if(fileNameTexts.includes(this.value) && fileNameCopy.innerText !== this.value){
					alert(`다른 파일에서 이미 ${this.value} 이름을 사용중입니다!`);
				}else{
					let updateIndex = fileNameTexts.indexOf(fileNameCopy.innerText);
					
					fileNameCopy.innerText = this.value;
					fileArea.removeChild(this);
					fileNameCopy.style.display = 'inline'; // => 파일이름 원본 다시 나타내기
					
					fileNameTexts[updateIndex] = this.value;
					console.log('마지막 텍스트배열 확인??', fileNameTexts);
				};			
			});
		});	
	};	
}
class Icon {
	/* TODO: Icon 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor(iconCnt){
		
		this.iconCnt = iconCnt;

	}
	// 아이콘 만들어주는 함수!!!!!!!!!!
	createIcon(){
		for(let i = 1; i <= this.iconCnt; i++){
			if(iconSequence > 10){ // => icon10이 넘어가면 다시 icon1 이미지파일 순회
				iconSequence = 1;
			};
			// 아이콘 전체구역 div 생성
			iconArea = document.createElement('div'); 
			iconArea.setAttribute('class', 'iconArea fileArea');
			divMain.appendChild(iconArea);

			// 아이콘 이미지 img 생성
			iconImg = document.createElement('img');
			iconImg.setAttribute('src', `images/icon${iconSequence}.png`);
			iconImg.setAttribute('alt', `icon${iconNum}`);
			iconImg.setAttribute('class', `iconImg icon${iconNum} fileImg`);
			iconImg.setAttribute('name', iconNum);
			iconArea.appendChild(iconImg);
			

			// 아이콘 이름 span 생성
			iconName = document.createElement('span');
			iconName.setAttribute('class', `iconName icon${iconNum} fileName`);
			iconName.textContent = `icon ${iconNum}`;
			iconArea.appendChild(iconName);

			fileNames = document.querySelectorAll('.fileName');		
			fileNameTexts = [];
			fileNames.forEach(function(fileName){
				fileNameTexts.push(fileName.innerText);
			})
			// 파일 이름 변경 시켜주는 함수 호출!!!!!
			new ChangeName(iconName);

			// 드래그 앤 드롭 해주는 함수 호출!!!!!!!!!!!!
			new Drag(iconArea);

			// 아이콘 순서와 아이콘 번호 증가
			iconSequence++;
			iconNum++;
		};
	};
};


class Folder {
	/* TODO: Folder 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
	constructor(folderCnt){
		
		this.folderCnt = folderCnt;
		
	}
	// 폴더 만들어주는 함수!!!!!!!!!
	createFolder(){
		for(let i = 1; i <= this.folderCnt; i++){
			// 폴더 전체구역 div 생성
			let folderArea = document.createElement('div'); 
			folderArea.setAttribute('class', 'folderArea fileArea');
			divMain.appendChild(folderArea);

			// 폴더 이미지 img 생성
			folderImg = document.createElement('img');
			folderImg.setAttribute('src', 'images/folder.png');
			folderImg.setAttribute('alt', `folder${folderNum}`);
			folderImg.setAttribute('class', `folderImg folderImg${folderNum} fileImg`);
			folderImg.setAttribute('name', folderNum);
			folderArea.appendChild(folderImg);

			// 폴더 이름 span 생성
			folderName = document.createElement('span');
			folderName.setAttribute('class', `folderName folder${folderNum} fileName`);
			folderName.textContent = `folder ${folderNum}`;
			folderArea.appendChild(folderName);

			fileNames = document.querySelectorAll('.fileName');		
			fileNameTexts = [];
			fileNames.forEach(function(fileName){
				fileNameTexts.push(fileName.innerText);
			})
			// 파일 이름 변경 하는 함수 호출!!!!!!!!!!
			new ChangeName(folderName);

			// 드래그 앤 드롭 기능 함수 호출!!!!!!
			new Drag(folderArea);

			new OpenFolder(folderImg);

			// 폴더 번호 증가
			folderNum++;
		};
	};
}

class OpenFolder {
	constructor(folder){
		this.folder = folder;
		this.openFolder();
		
		
	}
	// 폴더 더블 클릭시 창 열리는 함수!!!!!!!!
	openFolder(){
		this.folder.addEventListener('dblclick', function(){
			// 형제 요소인 폴더이름을 변수에 담음
			folderName = this.nextSibling;
			// 폴더 구역 생성
			folderWindow = document.createElement('div');
			folderWindow.setAttribute('class', `folderWindow ${this.alt}`)
			divOverlay.appendChild(folderWindow);

			// 폴더창 헤더부분 생성
			folderHeader = document.createElement('div');
			folderHeader.setAttribute('class', 'folderHeader');
			folderHeader.textContent = folderName.innerText;
			folderWindow.appendChild(folderHeader);
			// 폴더창 닫기버튼 생성
			closeBtn = document.createElement('button');
			closeBtn.setAttribute('class', 'closeBtn');
			closeBtn.textContent = 'X';
			folderHeader.appendChild(closeBtn);

			// 폴더 창에서 x버튼 클릭시 창 닫히는 함수!!!!!!!
			new CloseFolder(closeBtn);
			
			// 파일창 드래그 앤 드롭기능 함수 호출
			new Drag(folderWindow);
			
		});
	};
};

class CloseFolder {
	constructor(closeBtn){
		this.closeBtn = closeBtn;
		this.closeFolder();
	}
	closeFolder(){
		let folderWindow = (this.closeBtn.parentNode).parentNode;

		this.closeBtn.addEventListener('click', function(){
			folderWindow.parentNode.removeChild(folderWindow);
		});		
	};
};