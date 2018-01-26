//严格模式;
'use strict';
//ES5数组去重demo;
//声明需去重数组;
var Arr = [1,2,3,4,12,23,34,12,23,4,3,2,1];
//声明一个命名空间，arr需要去重的数组，ind去重开始的下标;
var reset = function log(arr,ind){
	//共有属性arr
	this.arr = (function(){
		if(arr instanceof Array === true){
			return arr;
		}else{
			//错误监控;
			throw new Error('arr不为数组');
		}
	}());
	//共有属性ind
	this.ind = (function(){
		if((typeof ind === 'number') && (/[.]/g.test(ind.toString()) === false)){
			if(ind>=-1){
				return ind;
			}else{
				return Math.abs(ind);
			}
		}else if(typeof ind !== 'number'){
			//错误监控;
			throw new Error('ind不为数字');
		}else{
			//错误监控;
			throw new Error('ind不为整数');
		}
	}());
	//共有属性length;
	this.length = arr.length;
}
//reset命名空间原型;
reset.prototype={
	ind:this.ind,//reset.ind属性;
	val:function(){
		var fnArr = this.arr;//val()方法，私有属性;
		//val()方法核心组件，利用for循环自加与自减逐渐压缩去重范围;
		for(var i=this.ind;i<this.length;i++){//for循环累加条件;
			if(this.arr.indexOf(fnArr[i])!==i){
				//私有属性去重
				fnArr.splice(i,1);
				//if条件式累减;
				i--;
				this.length--;
			}
		}
		return fnArr;//抛出去重后的私有属性;
	}
}

//原型链式继承
var nArr = new reset(Arr,0);
nArr.val();
console.log(nArr.val());
