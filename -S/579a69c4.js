webpackJsonp([10],{Dz3W:function(e,t,o){"use strict";e.exports=function(t,o,r){var n,i,s;return o&&(o+=""),r||(r=$.Deferred()),t&&o?(s="章节设置",i="设定"):(s="新建章节",i="创建"),n=function(n){var a,c;return a=$.box.prompt("<div class=Form><style>._Box h1 .I-trash{font-size:24px;float:right;width: 24px;height:57px;text-align:center;line-height:57px;cursor:pointer;}._Box h1 .I-trash:hover{color:#f40;}</style><h1>"+s+'<i class="I I-trash"></i></h1><div class=P><input placeholder="章节名称" value="'+(t?$.escape(t):"")+'" name="name"></div><div class=P><input name="dir" value="'+(o?$.escape(o):"")+'" placeholder="网址前缀，如 tech 、2018 等；限英文、数字、减号"></div><div class="P SELECT"><label for=dirSelect>默认顺序</label><select name="sort" id=dirSelect><option value="-1">新文章在前</option><option value="1">新文章在后</option></select></div></div>',{okBtn:i,ok:function(){return!1}}),a.find("select[name=sort]").val(n),c=a.find(".I-trash"),o?c.click(function(){var n;return a.close(),n="post/rm/"+o,PP.get1(n,function(i){var s,a;return s=function(){return setTimeout(function(){e.exports(t,o,r)})},a="章节『"+$.escape(t)+"』("+$.escape(o)+")",i?$.box.alert("<h1><p>"+a+" 尚有 "+i+" 篇文章。</p><p>删除所有文章后，才能删除章节。</p></h1>",{ok:s}):$.box.confirm("<h1>确认删除 "+a+" ?</h1>",{ok:function(){return PP.postJSON1(n,function(){return r.resolve("","")})},cancel:s})})}):c.remove(),a.find("form").save("post/dir",{old:o}).then(function(e){var t=e.dir,o=e.name;return t=t.toLowerCase(),a.close(),$.box.alert("章节『"+$.escape(o)+"』("+t+") "+i+"成功！"),r.resolve(t,o)})},o?PP.json("post/dir/sort/"+o,function(e){return n(e)}):n(1),r}}});