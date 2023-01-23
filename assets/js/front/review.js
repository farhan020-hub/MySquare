$.ajax({
				url:'getreview',
				type: 'POST',
				async:false
			})
			.done(function( data ) {
					data=JSON.parse(data);
					if(data){
					var str='<div class="container"><div class="owl-carousel" id="testimonial">';
					for(var i=0; i< data.length;i++){
						str += '<div class="item mt-15 pr-50 pl-50 pr-md-0 pl-md-0">'+
                        '<div class="d-flex justify-content-start">'+
                            '<div class="testi_img mr-3">'+
                                '<img src="'+data[i].profile_photo_url+'" width="60" alt="'+data[i].author_name+'">'+
                            '</div>'+
                            '<div class="review">'+
                                '<div class="rating">'+
                                    '<p><strong>'+data[i].author_name+'</strong></p>'+
                                    '<ul class="mb-7">';
										for(var j=1;j<=(data[i].rating);j++){  //print rating ?>
												str +='<li><i class="fa fa-star"></i></li>';
										 }

                                    str +='</ul>'+
                                '</div>'+
                                '<div>'+
                                    '<p>'+data[i].text+'</p>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
						'</div>';

					}
										str +='</div></div>';
					}
					var item = data[Math.floor(Math.random()*data.length)];

					$('#testi_section').html(str);
					var strfooter='';
					for(var k=1;k<=(item.rating);k++){  //print rating ?>
						strfooter +='<li><i class="fa fa-star"></i></li>';
					}
					$('#review-text-upfooter').html(item.text);
					$('#rating-star-footer').html(strfooter);
					$('#review-name-footer').html(item.author_name);
					});


$('#addreview').submit(function (e){
			e.preventDefault();
			$.ajax({
				url: "addreview",
				type: 'POST',
				data: new FormData($('#addreview')[0]),
				cache: false,
				contentType: false,
				processData: false
			})
			.done(function( data ) {
						if(data==0){
							//notification(true,'alert-danger',data.message);
							$('#message').html('Something went wrong.');
						}else if(data==1){
							$('#message').html('Review sumitted successfully');
							$('#add_Review').modal('hide');
							location.reload();
						}

					});


});