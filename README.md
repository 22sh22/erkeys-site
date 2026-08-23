# ERKEYS site

GitHub Pages에 올릴 ERKEYS 최소 랜딩페이지입니다.
빌드 도구 없이 `index.html`, `styles.css`, `CNAME`만으로 동작합니다.

## 파일 구성

- `index.html`: 메인 랜딩페이지
- `styles.css`: 반응형 스타일
- `CNAME`: GitHub Pages 커스텀 도메인 설정값
- `README.md`: 배포와 링크 교체 메모

## 배포 흐름

1. GitHub에서 새 저장소를 만듭니다. 예: `erkeys-site`
2. 이 폴더의 파일을 저장소 루트에 올립니다.
3. 저장소 `Settings > Pages`에서 배포 소스를 선택합니다.
4. `Custom domain`에 `erkeys.com`을 입력합니다. 이 저장소의 `CNAME` 파일도 같은 값을 갖고 있어야 합니다.
5. 가비아 DNS에서 GitHub Pages용 레코드를 설정합니다.
6. GitHub Pages 화면에서 HTTPS 적용 상태를 확인합니다.

## 가비아 DNS 값

| 타입 | 호스트 | 값 |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | GitHub계정명.github.io. |

`www`의 값은 실제 GitHub 계정 또는 조직명에 맞게 바꿔야 합니다.

## 링크 교체 위치

`index.html`에서 `href="#"`로 되어 있는 항목을 실제 URL로 바꾸면 됩니다.

- 구글폼: `신청 폼`
- 사용 가이드 또는 위키: `사용 가이드`
- 문의 메일: `hello@erkeys.com`

구글폼과 사용 가이드는 아직 사용자가 직접 준비하는 전제이므로, 공개 전까지 placeholder를 유지합니다.
