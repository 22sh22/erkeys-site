---
layout: guide
title: 키매핑 및 펌웨어 제작
description: MODU-C 키매핑 수정과 펌웨어 제작 요청 방법을 안내합니다.
---

# ZMK studio로 키 설정하기

진행하기 전, 펌웨어가 v4 미만인 경우 업데이트해야 합니다. (9/17 이전 배송분)

업데이트 방법은 다음 페이지에 소개되어 있습니다: [erkeys.com/reset-firmware](https://erkeys.com/user-guide/reset-firmware/)

양 쪽의 펌웨어를 모두 V4 이상으로 업데이트 하셨다면, 아래 사이트로 접속해주세요.

- https://zmk.studio/



## 방법

**마지막의 주의사항까지 끝까지 읽고 진행해주시길 바랍니다.**

### 1. USB 포트 선택하기
(시작 전, 왼쪽 키보드를 컴퓨터에 연결하는 것을 잊지 마세요)

<img width="640" height="360" alt="image" src="https://github.com/user-attachments/assets/a59a2338-fef5-4d8d-b5b4-dbfe39585d80" />
<img width="640" height="360" alt="image" src="https://github.com/user-attachments/assets/a8c32487-cec6-4284-a9a8-76e32af88cc8" />


### 2. 키보드 잠금 해제하기
잠금을 해제하라는 문구가 나옵니다.

새로운 펌웨어의 기본 설정된 잠금 해제 키는 다음과 같습니다:
layer1 + ctrl + R (순서대로)

<img width="640" height="360" alt="image" src="https://github.com/user-attachments/assets/0e14a28e-0dab-4a90-ade2-4d6bdaeb26c1" />


### 3. 키 설정하기
직관적이어서, 별도의 설명 없이 설정하실 수 있습니다.

끝나고 나면, 우측 상단의 저장 버튼을 눌러주세요.

## 주의사항

**다음 키는 수정하는 것을 절대 권장하지 않습니다.
**
1. 첫 번째 레이어의 접근 방법인, 엄지손가락 바깥 키
2. 두번째 레이어의 접근 방법인, 1번 레이어의 ctrl키
3. ZMK studio의 잠금 해제 키인, 2번 레이어의 R키 (zmk studio 상에선 투명하게 보임)



문제가 되는 상황은 다음과 같습니다:

잠금 해제 키에 접근할 방법을 지워버린 채로, 저장하고 나가버리는 경우
다시 들어와도 잠금 해제하질 못해서 수정도 못하게 되어버립니다.

꼭 "잠금 해제 키" 에 접근할 방법을 살려 둔 채로 작업을 진행하세요.

<img width="640" height="360" alt="image" src="https://github.com/user-attachments/assets/8b056612-a91d-482f-a27a-6a2eebc0b0d9" />

<img width="640" height="360" alt="image" src="https://github.com/user-attachments/assets/d2fd27fa-16ee-46c2-84d3-0dbccca67176" />


