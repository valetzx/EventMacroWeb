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
### 使用" \runmacro 名字 " 挂载脚本
### 使用" \stopmacro 名字 " 取消脚本
### 使用" \macrolist " 查看已挂载的脚本列表

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
Event OffHandItem()
```

3. 当 玩家等级 大于等于小于 <等级> 时 执行
```
Event Level()
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
clickslot(slot,29) #点击第29格
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

2. 等待 xxx刻（游戏刻20tick=1s）
```
sleep(80) #等待4秒
```

3. 关闭容器GUI
```
closegui()
```

## 脚本示例
这个视频中的脚本 https://www.bilibili.com/video/bv1Cd4y1g7Av
```
Event BackpackFull()
say(#stop)
say(包满哩？没有关西！)
command(home home)
sleep(80)
rightkeydown()
sleep(10)
rightkeyup()
moveitem(backpack)
sleep(80)
closegui()
command(home mine)
sleep(10)
say(#mine minecraft:deepslate_diamond_ore diamond_ore)
say(\runmacro main)
stop(test)
```

## 按键列表
```
key.attack:key.mouse.left
key.use:key.mouse.right
key.forward:key.keyboard.w
key.left:key.keyboard.a
key.back:key.keyboard.s
key.right:key.keyboard.d
key.jump:key.keyboard.space
key.sneak:key.keyboard.left.shift
key.sprint:key.keyboard.unknown
key.drop:key.keyboard.q
key.inventory:key.keyboard.e
key.chat:key.keyboard.unknown
key.playerlist:key.keyboard.tab
key.pickItem:key.mouse.middle
key.command:key.keyboard.enter
key.socialInteractions:key.keyboard.unknown
key.screenshot:key.keyboard.unknown
key.togglePerspective:key.keyboard.r
key.smoothCamera:key.keyboard.unknown
key.fullscreen:key.keyboard.unknown
key.spectatorOutlines:key.keyboard.unknown
key.swapOffhand:key.keyboard.unknown
key.saveToolbarActivator:key.keyboard.unknown
key.loadToolbarActivator:key.keyboard.unknown
key.advancements:key.keyboard.l
key.hotbar.1:key.keyboard.1
key.hotbar.2:key.keyboard.2
key.hotbar.3:key.keyboard.3
key.hotbar.4:key.keyboard.4
key.hotbar.5:key.keyboard.5
key.hotbar.6:key.keyboard.6
key.hotbar.7:key.keyboard.7
key.hotbar.8:key.keyboard.8
key.hotbar.9:key.keyboard.9
key.meteor-client.open-gui:key.keyboard.right.shift
key.meteor-client.open-commands:key.keyboard.period
```
