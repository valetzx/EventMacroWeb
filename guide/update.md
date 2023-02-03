#更新日志

## 2.7.0 (1.19.3)

```
修复了clickslot在其他界面中不能使用的bug
为clickslot增加了action参数
	PICKUP 拿起
    	QUICK_MOVE 移动
   	SWAP 交换
    	CLONE 创造模式专属的复制
    	THROW 扔一个出去
	THROW_ALL 扔全部出去
    	QUICK_CRAFT 快速合成
    	PICKUP_ALL 拿起全部
	action默认为拿起

例子：
clickslot(slot,0,throw) #扔出第一个格子中的一个物品
clickslot(slot,0,throw) #扔出第一个格子中的全部物品
服务器的箱子菜单推荐使用 pickup
```

## 2.6.0 (1.19.2)

```
拆分左键的两个情况（方块与实体）
现在你可以使用以下两个方式攻击
attackblock() #攻击方块
attackentity() #攻击实体
```

## 2.5.0 (Dev)

## 2.4.0 (+1.18.2)

```
增加了1.18.2版本的支持
增加了潜影盒复制doing eg.
	shulkerdupe(all) 复制全部
	shulkerdupe(0,1) 复制第一个和第二个槽位
	shulkerdupe(0,1,2,3,4) 复制第1，2，3，4，5个槽位
```

## 2.3.0 (1.19.2)

```
增加了LeaveGameDoing eg:
	LeaveGame() 退出
	LeaveGame(血量过低) 退出时显示血量过低

增加了HealthEvent eg:
	Health() 当血量低于10(五颗心)时触发
	Health(15) 当血量低于15(七颗半心)时触发
	Health(15,>) 当血量高于15(七颗半心)时触发
	Health(15,=) 当血量等于15(七颗半心)时触发
	Health(15,>=) 当血量大于等于于15(七颗半心)时触发

修复了TargetBlockDoing可能导致崩溃的bug
```

## 2.2.0 (1.19.2)

```
EM 2.2.0 更新日志
增加了TargetBlock行为来检测指向方块 eg:
	TargetBlock(minecraft:grass) 当指向草方块时执行宏 
	TargetBlock(minecraft:air)当无指向时执行
为命令、行为、事件的报错信息增加了翻译
修复了当事件出错时不会自动停止宏的错误
```
