# 常见问题

## Q：如何循环脚本？

### A：使用开始停止命令，复制一份一模一样的脚本改名：栗子(level0,level1)

```
#本内容块写在 level0 中
Event BackpackFull()
say(背包满哩)
run(level1)
stop(level0)
```
### 任意挂起（level）达成循环
```
#本内容块写在 level1 中
Event BackpackFull()
say(背包满哩)
run(level0)
stop(level1)
```

## Q：让游戏在后台挂机？

```
在游戏中按 F3+P 关闭失去窗口焦点时的自动暂停功能
```

## Q：如何自动附魔？

```
#本内容块写在 enchant.macro 文件中
#当目标方块为附魔台时执行，
#请在快捷栏1号位放青金石2号位放书
Event TargetBlock(minecraft:enchanting_table)
setkeypressed(true,key.use)
sleep(10)
setkeypressed(false,key.use)
sleep(10)
clickslot(slot,30,QUICK_MOVE)
sleep(2)
clickslot(slot,1,SWAP)
sleep(2)
ClickButton(0)
clickslot(slot,1,SWAP)
sleep(10)
closegui()
stop(enchant)
```
