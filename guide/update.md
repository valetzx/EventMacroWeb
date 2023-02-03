
### 2.7.0

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
clickslot(slot,0,throw) 扔出第一个格子中的一个物品
clickslot(slot,0,throw) 扔出第一个格子中的全部物品
服务器的箱子菜单推荐使用pickup
```
