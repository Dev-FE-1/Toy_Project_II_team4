# Toy_Project_II_team4

> SAJO ENT 엔터테인먼트 직원들을 위한 급여와 스케줄 관리 모바일 웹앱

![사조엔터](https://github.com/user-attachments/assets/7820e264-8a5a-4cac-a0f6-e5740ef70f62)

## 목차

- [Toy_Project_II_team4](#toy_project_ii_team4)
  - [프로젝트 개발 문서](#프로젝트-개발-문서)
  - [사용방법](#사용-방법)
  - [팀 구성](#팀-구성)
  - [프로젝트 관련 이동 링크](#프로젝트-관련-이동-링크)

## 📌 프로젝트 소개

본 프로젝트는 외근이 잦아 사내 컴퓨터로 자신의 급여 내역이나 스케줄을 확인하기 어려운 엔터테인먼트 매니저(직원)를 위한 웹 애플리케이션입니다. 이 웹앱을 통해 직원들은 편리하게 급여 내역을 확인할 수 있으며, 필요시 급여에 대한 정정 신청도 가능합니다. 또한, 캘린더 기능을 통해 자신의 스케줄을 손쉽게 관리할 수 있습니다.

## 📌 시작

### 설치

```bash
npm install
```

### 프로젝트 실행

```bash
npm run start
```

## 📌 사용 방법

1. **급여 내역 확인**: 로그인 후 '급여 내역' 메뉴에서 자신의 급여 명세서를 확인할 수 있습니다.
2. **급여 명세서 다운로드**: '급여 내역' 페이지에서 '다운로드' 버튼을 클릭하여 급여 명세서를 PDF 형식으로 다운로드할 수 있습니다.
3. **급여 정정 신청**: 급여 내역 페이지에서 '정정 신청' 버튼을 클릭하여 급여 내역에 대한 정정 요청을 할 수 있습니다.
4. **스케줄 관리**: 캘린더 메뉴에서 자신의 일정을 확인하고, 일정을 추가하거나 수정할 수 있습니다.
5. **홈 화면**: 홈 화면에서는 개인 정보를 확인하고 오늘의 스케줄을 조회할 수 있으며, 공지 카드에서 급여 명세서 정정 기간 알림을 받을 수 있습니다.
6. **마이페이지**: 마이페이지에서 개인 정보를 확인하고 수정할 수 있는 기능을 제공합니다.

## 📌 기술 스택

### 프론트엔드

- **React**: 18.3.1
- **TypeScript**: 5.2.2
- **Vite**: 5.3.4

### 상태 관리

- **Redux Toolkit**: 2.2.7
- **React Query**: 5.51.21

### 스타일링

- **Styled Components**: 6.1.12
- **MUI (Material-UI)**:
  - **@mui/material**: 5.16.4
  - **@mui/icons-material**: 5.16.5
  - **@mui/joy**: 5.0.0-beta.48
  - **@mui/x-date-pickers**: 7.11.1

### 폼 관리

- **React Hook Form**: 7.52.2

### 날짜 처리

- **Dayjs**: 1.11.12

### PDF 생성

- **jspdf**: 2.5.1
- **html2canvas**: 1.4.1

### 백엔드 및 데이터베이스

- **Firebase**: 10.12.4
- **Firebase Admin**: 12.3.0

### 개발 도구

- **ESLint**: 8.57.0
- **Prettier**: 3.3.3

## 📌 폴더 구조

---

```bash
📦src
 ┣ 📂api
 ┃ ┣ 📂login.ts
 ┃ ┃ ┗ 📜createId.ts
 ┃ ┣ 📜firebaseApp.ts
 ┃ ┣ 📜firebaseConfig.ts
 ┣ 📂components
 ┃ ┣ 📂button
 ┃ ┣ 📂cardBox
 ┃ ┣ 📂datepicker
 ┃ ┣ 📂Heading
 ┃ ┣ 📂iconButton
 ┃ ┣ 📂loading
 ┃ ┣ 📂modal
 ┃ ┣ 📂nav
 ┃ ┣ 📂selectBox
 ┃ ┗ 📂textInputField
 ┣ 📂hooks
 ┣ 📂layout
 ┣ 📂pages
 ┃ ┣ 📂Calendar
 ┃ ┣ 📂Dashboard
 ┃ ┣ 📂login
 ┃ ┣ 📂myPage
 ┃ ┣ 📂salaryAdjustment
 ┃ ┣ 📂salaryDetail
 ┃ ┗ 📂salaryList
 ┃ ┃ ┣ 📂api
 ┃ ┃ ┃ ┗ 📜fetchSalaryInfo.ts
 ┣ 📂router
 ┃ ┣ 📜paths.tsx
 ┃ ┗ 📜router.tsx
 ┣ 📂slices
 ┃ ┣ 📜authSlice.ts
 ┃ ┣ 📜salaryAdSlice.ts
 ┃ ┗ 📜scheduleSlice.tsx
 ┣ 📂store
 ┃ ┗ 📜store.ts
 ┣ 📂styles
 ┃ ┣ 📂fonts
 ┃ ┃ ┣ 📂SUIT-ttf
 ┃ ┃ ┗ 📂SUIT-woff2
 ┃ ┣ 📂images
 ┃ ┃ ┗ 📜sajoLogo.png
 ┃ ┣ 📜fonts.css
 ┃ ┣ 📜GlobalStyle.tsx
 ┃ ┗ 📜reset.css
 ┣ 📂utils
 ┃ ┣ 📜FormatDate.tsx
 ┃ ┣ 📜getCurrentDate.ts
 ┃ ┗ 📜IFElse.tsx
 ┣ 📜App.tsx
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
```

## 팀 구성

| name   | username                                         |
| ------ | ------------------------------------------------ |
| 권혁준 | [@red-dev-Mark](https://github.com/red-dev-Mark) |
| 배하은 | [@haruyam15](https://github.com/haruyam15)       |
| 박지영 | [@jizerozz](https://github.com/jizerozz)         |
| 고낙연 | [@nakyeonko3](https://github.com/nakyeonko3)     |

## 프로젝트 관련 이동 링크

- [4조 그룹 노션 링크](https://www.notion.so/Template-4-557b0dd51fa04f508fd874767d2f9cb1)
- [4조 프로젝트 스케줄](https://github.com/orgs/Dev-FE-1/projects/18/views/1)
- [4조 Slack](https://app.slack.com/client/T072V0GD6LR/C07E28SBF7S)
- [4조 리포지토리](https://github.com/Dev-FE-1/Toy_Project_II_team4)
- [4조 와이어프레임 Figma](https://www.figma.com/design/jT5wqMl73uJmI0ss6SEMlw/%ED%86%A0%EC%9D%B4%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B82_4%EC%A1%B0?node-id=3-399&t=YnnKgBAasqVjwjDT-1)

## 프로젝트 개발 문서

- [커밋 작성 가이드](./document/커밋작성가이드.md)
- [4조 와이어프레임 Figma](https://www.figma.com/design/jT5wqMl73uJmI0ss6SEMlw/%ED%86%A0%EC%9D%B4%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B82_4%EC%A1%B0?node-id=3-399&t=YnnKgBAasqVjwjDT-1)
