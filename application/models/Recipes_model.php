<?php
class Recipes_model extends CI_Model {

        public function __construct()
        {
                $this->load->database();
        }

        public function get_recipes($slug = FALSE)
		{
	        if ($slug === FALSE)
	        {
	                $query = $this->db->get('recipes');
	                return $query->result_array();
	        }

	        $query = $this->db->get_where('recipes', array('slug' => $slug));
	        return $query->row_array();
		}
		function search($tag){
	        $sql = "SELECT *
	                FROM recipes
	                WHERE tags LIKE '%,{$tag},%'";
	        $query = $this->db->query($sql);
	        return $query->result();
	    }
}

