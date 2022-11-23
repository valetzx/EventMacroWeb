# 使用指南

## 前言
本MOD（EventMacro）为付费mod，您可以用它在游戏中完成许多自动化（懒人）的操作，比如当背包满时，自动卖出xxx物品，或是自动将物品放入指定的箱子！丢出不想要的物品！
在小黑塔（刷怪塔等）挂机时，当经验到达指定等级时，自动附魔指定箱子中的物品，并自动回去继续挂机！循环操作！（Future）
您在付费后可提出您想要的事件或是动作，我们会尽力在未来的更新中加入它们！
白名单申请地址：https://docs.qq.com/form/page/DVHBzYm5BZG1NZVVR
白名单申请前请准备好1.19.2Fabric客户端，并下载以下MOD放入mods文件夹，第一次启动游戏会自动崩溃，查看崩溃内容最后几行，对着填写以上申请表！
https://pigeonpig.lanzoul.com/b00q3hp2j   密码:piggy

## 脚本语法规则

### 脚本默认存放路径为：<游戏版本>\.minecraft\EventMacro\Macros
### 命名规则为：名字.macro 
### 按下键盘 `\` (反斜杠) 键，调出 2.0 GUI 窗口

脚本分为 **事件部分** 和 **动作部分**
在脚本中可以使用#作为注释，#所在的行会被忽略
事件部分由Event开头，后面使用空格作为分隔符，填在同一行的事件全部满足会开始脚本的动作部分，填在不同行的事件满足一行的全部事件脚本的动作部分就会开始执行。事件的具体内容请看事件列表。
如果整个脚本内没有找到事件，当脚本被挂载时会直接执行动作部分。
非注释和事件行会被认为是动作，动作的具体内容请看动作列表。

## A 事件列表
1. 当 玩家背包满时 
```
Event BackpackFull()
```

2. 当 副手存在 xx物品 <物品数量> 时 执行 xx动作
```
Event OffHandItem(steak,5) #当副手steak是5时
```

3. 当 玩家等级 大于等于小于 <等级> 时 执行 
```
Event Level(10,<) #当等级小于10级时
Event Level(30,=) #当等级等于30级时
Event Level(40,>) #当等级大于40级时
```

4. 当 玩家到达 (x,y,z) 坐标时 执行 xx动作
```
Event Pos(x,y,z) #当到达 xyz 坐标时
```

5. 当 目标方块为 xxx 时 
```
Event TargetBlock(minecraft:grass) #当指向草方块时执行宏 
```

## B 动作列表

1. 说话 say 内容
```
#栗子1：说话（需要使用原版指令请使用动作2）
say(/help 1) #说出内容 公屏可见（/help 1）
#栗子2：执行自动挖矿指令（任意baritone命令）
say(#mine diamond_ore) #自动挖掘钻石矿石
```

2. 执行 xxx 指令
```
#栗子1：切换创造模式
command(gamemode 1)
#栗子2：服务器自动登录
command(login xxxxx)
```

3. 控制按键（非键盘）
```
#true为按下 false为松开
setkeypressed(true,key.attack) #按下攻击键（左键）
setkeypressed(true,key.forward) #按下前进键（W）
setkeypressed(false,key.attack) #松开攻击键（左键）
setkeypressed(false,key.forward) #松开前进键（W）
#更多按键可用查看下面的按键列表
```

4. 玩家 走到xyz坐标
```
say(#goto x y z) #调用baritone去往<x y z>坐标
```

5. 取出 <坐标>容器中 的物品
```
#这个动作有三个参数 MoveItem()
moveitem(chest) #将箱子的物品放入背包
```

6. 将 背包中的物品 放入容器
```
#这个动作有三个参数 MoveItem()
moveitem(backpack) #将背包里的物品放入箱子（不放快捷栏）
moveitem(backpackall) #将背包的物品全部放入箱子
```

7. 点击箱子中的*某一格
```
#有两个参数 slot 是格子 name 是物品名字，默认为左键
clickslot(slot,29) #点击第29格(箱子左上角为第0格)
clickslot(name,猪猪) #点击物品名字为 猪猪 的那一格
```

注意！数格子是从0开始数！！！

8. 丢出背包内的物品
```
#这个动作有三个参数，参考上面的描述
dropitem(backpack) #丢出背包中的物品（不丢快捷栏）
dropitem(backpackall) #丢出背包中的所有物品
dropitem(name,Cobblestone) #丢出指定名字物品
dropitem(name,圆石) #丢出叫圆石的物品
```

## C 判断
1. 当 玩家看着的方块为 xxx 时 执行 xx 动作


## D 其他
1. 停止宏运行 Stop(宏文件名字)
```
stop(level) #停止文件名为 level.marco 的宏脚本
```

2. 挂起宏运行 Run(宏文件名字)
```
run(level) #挂起文件名为 level.marco 的宏脚本
```

3. 等待 xxx刻（游戏刻20tick=1s）
```
sleep(80) #等待4秒
```

4. 关闭容器GUI（箱子，工作台等）
```
closegui()
```

## 脚本示例
```
Event BackpackFull()
say(#stop)
say(包满哩？没有关西！)
command(home home)
sleep(80)
setkeypressed(true,key.use)
sleep(10)
setkeypressed(false,key.use)
moveitem(backpack)
sleep(80)
closegui()
command(home mine)
sleep(10)
say(#mine minecraft:deepslate_diamond_ore diamond_ore)
stop(test)
```

### 后面应该会放出更多2.0脚本

## 按键列表

### 以下列表中文为描述，括号中为默认按键，使用栗子参考 动作列表3

```
key.attack 攻击键（鼠标左键）
key.use 使用键（鼠标右键）
key.forward 前进键（键盘W）
key.left（键盘A）
key.back（键盘S）
key.right（键盘D）
key.jump 跳跃键（键盘空格）
key.sneak 下蹲键（左SHIFT）
key.sprint 加速键
key.drop 丢弃键（键盘Q）
key.inventory 背包键（键盘E）
key.chat 聊天键（键盘T）
key.playerlist 玩家列表（TAB）
key.pickItem 选取方块（鼠标中键）
key.command 指令键（键盘/）
key.socialInteractions :key.keyboard.unknown
key.screenshot :key.keyboard.unknown
key.togglePerspective :key.keyboard.r
key.smoothCamera :key.keyboard.unknown
key.fullscreen :key.keyboard.unknown
key.spectatorOutlines :key.keyboard.unknown
key.swapOffhand :key.keyboard.unknown
key.saveToolbarActivator :key.keyboard.unknown
key.loadToolbarActivator :key.keyboard.unknown
key.advancements 进度键（键盘L）
key.hotbar.1 快捷键1（键盘1）
key.hotbar.2 快捷键2（键盘2）
key.hotbar.3 快捷键3（键盘3）
key.hotbar.4 快捷键4（键盘4）
key.hotbar.5 快捷键5（键盘5）
key.hotbar.6 快捷键6（键盘6）
key.hotbar.7 快捷键7（键盘7）
key.hotbar.8 快捷键8（键盘8）
key.hotbar.9 快捷键9（键盘9）
key.meteor-client.open-gui 彗星打开GUI键（右SHIFT）
key.meteor-client.open-commands 彗星指令键（.）
```
