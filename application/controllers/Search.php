<?php
class Search extends CI_Controller {

		public function __construct()
		{
			parent::__construct();
			$this->load->model('tag_model');
			$this->load->model('recipes_model');
			$this->load->helper('url_helper');
		}

		public function index()
		{
		// 	$data['recipes'] = $this->recipes_model->get_recipes();
		// 	$data['title'] = 'All Recipes';

		// 	// $this->load->view('templates/header', $data);
		// 	$this->load->view('recipes/index', $data);
			// $this->load->view('templates/footer');
		}

		public function view($slug)
		{
			$data['tag'] = $this->tag_model->get_tag_number($slug);

			if (empty($data['tag']))
			{
				show_404();
			}

			$data['result'] = $this->recipes_model->search($data['tag']);

			// $data['title'] = $data['recipes_item']['title'];

			$this->load->view('template/head', $data);
			$this->load->view('template/header', $data);
			$this->load->view('search/view', $data);
			$this->load->view('template/footer', $data);
		}
}