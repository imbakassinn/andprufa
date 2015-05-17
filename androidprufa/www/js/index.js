/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
     function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    }
    function onDeviceReady() {
    $('#takki').click(function() {
      var str = $('#leit').val();
      $('#spurning').hide();
      var m = $.getJSON( "https://api.500px.com/v1/photos/search?term="+str+"&consumer_key=hbn1DGW8hBsaPxDviwkCA3yLZquFl8rLMzBafrw5", function(jd) {
      $('#v1').html('<img src="' + jd.photos[0].image_url + '">');
      $('#v2').html('<img src="' + jd.photos[1].image_url + '">');
      $('#v3').html('<img src="' + jd.photos[2].image_url + '">');
    });
  });
}
