(function(){
			var dropzone = document.getElementById('drop');

			var displayUploads = function(data){
				var imageFace = document.getElementById('imageFace'),
					anchor,
					x;

				for(x = 0; x < data.length; x = x + 1){
					anchor = document.createElement('img');
					anchor.setAttribute("src", data[x].file);
					anchor.setAttribute("width", "100%");

					imageFace.appendChild(anchor);
				}	
			}

			var upload = function(files){
				var formData = new FormData(),
					xhr = new XMLHttpRequest(),
					x;

				for(x = 0; x < files.length; x = x + 1){
					formData.append('file[]', files[x]);
				}	

				xhr.onload = function(){
					var data = JSON.parse(this.responseText);

					displayUploads(data);

				}

				xhr.open('post','upload.php');
				xhr.send(formData);
			}

			drop.ondrop = function(e){
				e.preventDefault();
				this.className = 'drop';
				upload(e.dataTransfer.files);  
			}

			drop.ondragover = function(){
				this.className = 'drop dragover';
				return false;
			}
			drop.ondragleave = function(){
				this.className = 'drop';
				return false;
			}
		}());