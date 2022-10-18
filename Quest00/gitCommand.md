**[ Git 명령어 ]**

    $ cd 지정폴더이름
    $ git init : 새로운 저장소 생성
    $ git clone 소스코드 : 저장소 복제/다운로드
    $ git add '파일명' : 선택파일 index에 추가
    $ git add -A : 수정된 파일들 index에 추가
    $ git add . : 모든 파일 index에 추가
    $ git commit -m '메시지' : 커밋 생성
    $ git status : 파일 상태 확인
    $ git branch : 브랜치 목록
    $ git branch 브랜치명 : 브랜치 생성
    $ git checkout -b 브랜치명 : 브랜치 생성 & 이동
    $ git checkout master : master branch로 되돌아옴
    $ git remote add origin 원격서버주소 : 클라우드 주소 등록 및 발행
    $ git remote remove 원격서버주소 : 클라우드 주소 삭제
    $ git branch -d 브랜치명 : 브랜치 삭제
    $ git push origin 브랜치명 : 만든 브랜치를 원격서버에 전송
    $ git push -u origin 브랜치명 : 새 브랜치를 원격저장소로 push
    $ git pull : 원격 저장소의 변경 내용이 현재 디렉토리에 가져와지고(fetch) 병합(merge)됨
    $ git pull origin 브랜치명 : 원격에 저장된 git 프로젝트의 현재 상태를 다운 + 현재 위치한 브랜치로 병합
    $ git merge 다른브랜치명 : 현재 브랜치에 다른 브랜치의 수정사항 병합
    $ git add 파일명 : 각 파일을 병합할 수 있음
    $ git diff 브랜치명 다른브랜치명 : 변경 내용 merge 전에 바뀐 내용을 비교할 수 있음
    $ git log : 현재 위치한 브랜치 커밋 내용 확인 및 식별자 부여됨
    $ git checkout --파일명 : 로컬의 변경 사항을 변경 전으로 되돌림
    $ git fetch origin : 원격에 저장된 git프로젝트의 현 상태를 다운로드