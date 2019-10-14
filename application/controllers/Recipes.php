<?php
class Recipes extends CI_Controller {

		public function __construct()
		{
			parent::__construct();
			$this->load->model('recipes_model');
			$this->load->helper('url_helper');
		}

		public function index()
		{
			$data['recipes'] = $this->recipes_model->get_recipes();
			$data['title'] = 'All Recipes';

			// $this->load->view('templates/header', $data);
			$this->load->view('recipes/index', $data);
			// $this->load->view('templates/footer');
		}

		public function view($slug = NULL)
		{
			$data['recipes_item'] = $this->recipes_model->get_recipes($slug);

			if (empty($data['recipes_item']))
			{
				show_404();
			}

			$data['title'] = $data['recipes_item']['title'];

			$this->load->view('template/head', $data);
			$this->load->view('template/header', $data);
			$this->load->view('recipes/view', $data);
			$this->load->view('template/footer');
		}
}