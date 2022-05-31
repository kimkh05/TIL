<script>
	let name = "홍길동";
	let checkTrue = false;
	
	const click = () => {
		console.log(checkTrue);
		if(checkTrue){
			name = "hwang";
		} else{
			name = "홍길동";
		}
		checkTrue = !checkTrue;
	}
</script>

<main>
	<span>{name}</span>
	<button on:click={click} >click me</button>
</main>

<style>
	body{
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
	}
</style>