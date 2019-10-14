<div class="container">

	<?php foreach ($result as $data_item): ?>

		<a href="/recipes/<?php echo $data_item->slug;?>">
			<?php echo $data_item->title; ?>
		</a>
		<br/>

	<?php endforeach;?>

</div>
