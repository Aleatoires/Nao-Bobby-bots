module.exports = class method {

	static parse(message){
		if(this.match(message)){
			this.action(message);
			return true;
		}
		return false;
	}

	static match(message){
		return false;
	}

	static action(message){}
	
}