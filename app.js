var StoreList = {
	init: function() {
		this.$item = $('.item');
		this.$item.draggable({ helper: "clone" });
	}
}

var GroceryList = { 
	total: 0,
	
	totalize: function(){
  	this.total += parseFloat($('.ui-draggable-dragging .item_price').html());
		$('#total_cost').html(GroceryList.total.toFixed(2));
	},
		
	init: function() {
		this.$target = $('#grocery_list');
		this.$target.droppable({
  		drop: function() { 
  			GroceryList.totalize();
  			$(this).append('<tr>'+$('.ui-draggable-dragging').clone().html()+'</tr>'); 
  		}
		});
	}
}


$(document).ready(function() {
	StoreList.init();
	GroceryList.init();
});