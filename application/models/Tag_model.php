<?php
class Tag_model extends CI_Model {

        public function __construct()
        {
                $this->load->database();
        }

        public function get_tag_number($slug)
		{

	        $query = $this->db->get_where('tags', array('slug' => $slug));
	        return $query->row_array()['tag_number'];
		}

}

