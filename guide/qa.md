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
