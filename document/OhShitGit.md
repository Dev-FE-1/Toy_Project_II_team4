# Oh Shit Git!? 깃 실수 해결 백서

[Oh Shit, Git!?!](https://ohshitgit.com/)

![](https://i.imgur.com/3R9iaYo.jpeg)

Git은 어렵습니다. 망치는 것은 쉽지만 실수를 고치는 방법을 알아내는 것은 빌어먹을 불가능합니다. Git 문서에는 문제를 해결하기 위해 *알아야 할 항목의 이름을 이미 알고 있지 않는 한* 혼란에서 벗어나는 방법을 검색할 수 없는 닭고기와 달걀 문제가 있습니다 .

그래서 여기에 내가 겪었던 몇 가지 나쁜 상황과 결국 어떻게 그 상황에서 벗어날 수 있었는지 *간단한 영어로 설명합니다* .

## [아 젠장, 내가 뭔가 크게 잘못했는데, git에게 마법의 타임머신이 있다고 말해주세요!?!](https://ohshitgit.com/#magic-time-machine)

```git
git reflog
# you will see a list of every thing you've
# done in git, across all branches!
# each one has an index HEAD@{index}
# find the one before you broke everything
git reset HEAD@{index}
# magic time machine
```

이를 사용하여 실수로 삭제한 항목을 다시 가져오거나, 저장소를 손상시킨 일부 항목을 제거하거나, 잘못된 병합 후 복구하거나, 실제로 작동했던 시점으로 돌아갈 수 있습니다. 나는 `reflog`많이 사용합니다. 메가 모자 추가를 제안해주신 많은 분들이 주신 메가 모자 팁!

## [아 젠장, 약속을 하고 나서 작은 변화 하나가 필요하다는 걸 즉시 깨달았어요!](https://ohshitgit.com/#change-last-commit)

```git
# make your change
git add . # or add individual files
git commit --amend --no-edit
# now your last commit contains that change!
# WARNING: never amend public commits
```

커밋한 다음 테스트/린터를 실행하고 FML을 실행하면 일반적으로 이런 일이 발생합니다. 등호 뒤에 공백을 넣지 않았습니다. `rebase -i`새로운 커밋으로 변경을 수행한 다음 두 커밋을 함께 압축할 수도 있지만 이는 약 백만 배 더 빠릅니다.

_경고: 공개/공유 브랜치로 푸시된 커밋을 수정해서는 안 됩니다! 로컬 복사본에만 존재하는 커밋만 수정하세요. 그렇지 않으면 시간이 많이 걸릴 것입니다._

## [아 젠장, 마지막 커밋의 메시지를 변경해야 해요!](https://ohshitgit.com/#change-last-commit-message)

```git
git commit --amend
# follow prompts to change the commit message
```

어리석은 커밋 메시지 형식 요구 사항.

## [아 젠장, 새 브랜치에 있어야 할 것을 실수로 마스터에 커밋했습니다!](https://ohshitgit.com/#accidental-commit-master)

```git
# create a new branch from the current state of master
git branch some-new-branch-name
# remove the last commit from the master branch
git reset HEAD~ --hard
git checkout some-new-branch-name
# your commit lives in this branch now :)
```

`git reset HEAD@{number-of-commits-back}`참고: 커밋을 이미 공개/공유 브랜치에 푸시한 경우에는 작동하지 않으며 다른 작업을 먼저 시도한 경우 `HEAD~`. 무한한 슬픔. 또한 많은 분들이 저 자신도 몰랐던 이 내용을 더 짧게 만드는 멋진 방법을 제안해 주셨습니다. 다들 감사 해요!

## [아 젠장, 실수로 잘못된 브랜치를 커밋했습니다!](https://ohshitgit.com/#accidental-commit-wrong-branch)

```git
# undo the last commit, but leave the changes available
git reset HEAD~ --soft
git stash
# move to the correct branch
git checkout name-of-the-correct-branch
git stash pop
git add . # or add individual files
git commit -m "your message here";
# now your changes are on the correct branch
```

많은 사람들이 `cherry-pick`이 상황에도 사용을 제안했으므로 가장 적합한 것을 선택하세요!

```git
git checkout name-of-the-correct-branch
# grab the last commit to master
git cherry-pick master
# delete it from master
git checkout master
git reset HEAD~ --hard
```

## [아 젠장, diff를 실행하려고 했는데 아무 일도 일어나지 않았나요?!](https://ohshitgit.com/#dude-wheres-my-diff)

파일을 변경했지만 `diff`비어 있다는 것을 알고 있다면 `add`파일을 스테이징으로 설정했을 가능성이 높으며 특수 플래그를 사용해야 합니다.

```git
git diff --staged
```

̅\_(ツ)\_/̅ 아래에 파일을 저장하세요. (예, 이것이 버그가 아닌 기능이라는 것은 알지만, 이런 일이 처음 발생하면 존나 당황스럽고 명확하지 않습니다!)

## [아 젠장, 5개 정도 전의 커밋을 실행 취소해야 해요!](https://ohshitgit.com/#undo-a-commit)

```git
# find the commit you need to undo
git log
# use the arrow keys to scroll up and down in history
# once you've found your commit, save the hash
git revert [saved hash]
# git will create a new commit that undoes that commit
# follow prompts to edit the commit message
# or just save and commit
```

변경 사항을 실행 취소하기 위해 기존 파일 내용을 추적하고 기존 파일에 복사하여 붙여넣을 필요가 없다는 것이 밝혀졌습니다! 버그를 범한 경우 를 사용하여 한 번에 커밋을 모두 취소할 수 있습니다 `revert`.

전체 커밋 대신 단일 파일을 되돌릴 수도 있습니다! 하지만 물론, 진정한 자식 방식에서는 완전히 다른 빌어먹을 명령 세트입니다...

## [아 젠장, 파일 변경 사항을 취소해야 해요!](https://ohshitgit.com/#undo-a-file)

```git
# find a hash for a commit before the file was changed
git log
# use the arrow keys to scroll up and down in history
# once you've found your commit, save the hash
git checkout [saved hash] -- path/to/file
# the old version of the file will be in your index
git commit -m "Wow, you don't have to copy-paste to undo"
```

마침내 이것을 알아냈을 때 그것은 엄청났습니다. 거대한. 거대한. 하지만 진지하게, 도대체 어떤 행성에서 `checkout --`파일을 실행 취소하는 가장 좋은 방법이 의미가 있습니까? :리누스-토르발즈에서 주먹을 흔들다:

## [이 소음은 젠장, 포기하겠습니다.](https://ohshitgit.com/#fuck-this-noise)

```git
cd ..
sudo rm -r fucking-git-repo-dir
git clone https://some.github.url/fucking-git-repo-dir.git
cd fucking-git-repo-dir
```

이에 대해 Eric V.에게 감사드립니다. 이 농담 의 사용에 대한 모든 불만 사항은 `sudo`그에게 전달될 수 있습니다.

하지만 실제로 브랜치가 너무 지루해서 "git 승인" 방식으로 원격 저장소와 동일하게 저장소의 상태를 재설정해야 한다면 이것을 시도해 보세요. 하지만 이는 파괴적이고 복구할 수 없는 작업이라는 점에 주의하세요!

```git
# get the lastest state of origin
git fetch origin
git checkout master
git reset --hard origin/master
# delete untracked files and directories
git clean -d --force
# repeat checkout/reset/clean for each borked branch
```

## 마지막 커밋 이후의 모든 변경 사항 취소하기

```
git clean -fd
git restore .
```

## 특정 원격 브랜치 가져오기

```
git switch -c <local-branch-name> origin/<remote-branch-name>
```

## main브랜치를 default branch로 바꾸기

- 기본 브랜치 를 main으로 변경

```bash
git config --global init.defaultBranch main
```

## git pull --force 강제 pull 하는 방법

```bash
git add .
git stash
git stash drop
git pull
```

## 커밋 내역 합치는 방법, 커밋 메시지 수정 방법

```
git rebase -i --root
```

이 명령어를 실행하면 전체 커밋 로그가 열립니다.

2. **커밋 목록에서 합치고자 하는 커밋들 찾기**

텍스트 에디터에서 합치고자 하는 커밋들을 찾습니다. 가장 오래된 커밋부터 시작해서 `pick`을 `squash`(또는 `s`)로 변경합니다. 가장 최신 커밋의 `pick`은 그대로 둡니다.

3. **커밋 메시지 수정하기**

파일을 저장하고 텍스트 에디터를 종료하면 다른 텍스트 에디터가 열립니다. 여기에서 새로운 커밋 메시지를 작성할 수 있습니다.

4. **rebase 완료하기**

새로운 커밋 메시지를 작성하고 텍스트 에디터를 종료하면 rebase가 완료됩니다. 이제 `git log`를 실행하면 선택한 이전 커밋들이 하나의 커밋으로 합쳐진 것을 확인할 수 있습니다.


## 코드 리뷰용 브랜치 만들고 PR하는 방법
전체 커밋이력이 다 나오는 PR 내역 만드는 방법

### 조건
터미널  환경이 git bash, linux, mac 을 사용해야함.

1. 첫번째 커밋 해시 찾기

git switch main
git log --reverse --oneline | head -1

2. 커밋해시로 브랜치 생성

git switch -c <브랜치명> <첫번째커밋해시>

3. 생성된 브랜치를 깃헙(원격)에 푸시

git push -u origin <브랜치명>

4. <브랜치명>에 main브랜치를 merge하는 PR을 하기
