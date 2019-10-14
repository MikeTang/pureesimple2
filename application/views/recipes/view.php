<div class="container">

	<div class="recipe_sect">

		<h2 class="recipe_title"><?php echo ucfirst($recipes_item['title']);?></h2>
		<div class="pop_ingredients_wrapper">
			<div class="ingredient_box">
				<div class="icon_box">
					<i class="fas fa-apple-alt"></i>
				</div>
				<p>Apple</p>
			</div>

			<div class="ingredient_box">
				<div class="icon_box">
					<i class="fas fa-carrot"></i>
				</div>
				<p>Carrot</p>
			</div>
		</div>

		<div class="recipe_content">
			<?php echo $recipes_item['content'];?>
		</div>
	</div>


</div>