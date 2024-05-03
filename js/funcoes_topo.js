function swMenuTopo(parametrosTopo,elementoTopo,jsonMenus){try{if(!parametrosTopo){throw 'Parâmetros do topo indefinidos.'}
if(!elementoTopo){throw 'Elemento do topo não identificado.'}
if(!jsonMenus){throw 'Objeto de Menus não identificados.'}
const getItemMenu=(menu,sub=!1,dropdown=!1)=>{const itemMenu=document.createElement('li');const linkMenu=document.createElement('div');linkMenu.classList.add('p_link_menu');if(sub){linkMenu.classList.add('p_link_submenu')}
if(menu.icone){const icone=document.createElement('span');icone.className='p_icone_link swfa fa '+menu.icone;linkMenu.append(icone)}
if(menu.nome){const txt=document.createElement('span');txt.className='p_txt_link';txt.innerText=menu.nome;linkMenu.append(txt)}
if(menu.link&&menu.link!=='#'){const a=document.createElement('a');a.href=menu.link;a.target=menu.target;a.append(linkMenu);itemMenu.append(a)}else{itemMenu.append(linkMenu)}
if(menu.submenu){const submenu=document.createElement('div');submenu.className='p_submenu';const ul=document.createElement('ul');if(menu.submenu.length){menu.submenu.forEach(submenu=>{ul.append(getItemMenu(submenu,!0,!1))})}
submenu.append(ul);if(dropdown){const itemDropdown=document.createElement('div');itemDropdown.className='p_dropdown';itemDropdown.append(submenu);itemMenu.append(itemDropdown)}else{itemMenu.append(submenu)}
linkMenu.classList.add('p_titulo_submenus')}
return itemMenu}
const menuTopo=document.querySelector('.p_menu_topo')?document.querySelector('.p_menu_topo'):document.createElement('nav');menuTopo.classList.add('p_menu_topo');menuTopo.append(document.createElement('ul'));elementoTopo.append(menuTopo);const menuTodos=getItemMenu({nome:'Serviços',icone:'fa-bars',submenu:!0},!1,!0);menuTodos.className='p_menu_todos';menuTodos.querySelector('.p_link_menu').classList.add('p_link_menu_topo');const insereItensMenu=()=>{menuTopo.classList.add('building');menuTopo.querySelector('ul').replaceChildren();menuTopo.querySelector('ul').append(menuTodos.cloneNode(!0));(parametrosTopo.limitar_caracteres_menu)&&menuTopo.classList.add('limitar_caracteres');(parametrosTopo.qtde_itens_menu>0)&&menuTopo.classList.add('limitar_quantidade');let inserirMenuTodos=!1;jsonMenus.menu.forEach(item=>{const dropdown=(inserirMenuTodos===!1)?!0:!1;const menu=getItemMenu(item,!1,dropdown);menu.querySelector('.p_link_menu').classList.add('p_link_menu_topo');menuTopo.querySelector('ul').append(menu);if(!inserirMenuTodos&&((parametrosTopo.qtde_itens_menu>0&&menuTopo.querySelectorAll('.p_link_menu_topo').length>parametrosTopo.qtde_itens_menu)||menuTopo.querySelector('ul').scrollWidth>menuTopo.querySelector('ul').offsetWidth)){inserirMenuTodos=!0}
if(inserirMenuTodos){if(menu.querySelector('.p_dropdown')){menu.append(menu.querySelector('.p_submenu'));menu.querySelector('.p_dropdown').remove()}
menu.querySelector('.p_link_menu').classList.replace('p_link_menu_topo','p_link_menu_todos');menuTopo.querySelector('.p_menu_todos').querySelector('ul').append(menu)}});menuTopo.querySelector('ul').append(menuTopo.querySelector('.p_menu_todos'));menuTopo.classList.remove('building');menuTopo.querySelectorAll('.p_link_menu_topo').forEach(linkMenuTopo=>{const itemMenu=linkMenuTopo.closest('li');itemMenu.addEventListener('click',(element)=>{if(window.innerWidth<=1000){if(!itemMenu.classList.contains('show')){itemMenu.classList.add('show')}else if(element.target.classList.contains('p_link_menu')||element.target.closest('.p_link_menu')){itemMenu.classList.remove('show')}}});itemMenu.addEventListener('mouseenter',()=>{if(window.innerWidth>1000){itemMenu.classList.add('show')}});itemMenu.addEventListener('mouseleave',()=>{if(!itemMenu.querySelector('.p_filtro input:focus')){itemMenu.classList.remove('show')}})});if(parametrosTopo.filtro_menu){const menuTodos=menuTopo.querySelector('.p_menu_todos');const itens=menuTodos.querySelectorAll('.p_submenu li');const filtro=document.createElement('div');filtro.className='p_filtro';filtro.innerHTML=`
                <div class="p_cont_filtro">
                    <label class="p_titulo" for="p_filtro_menu">
                        <span class="swfa fas fa-search"></span>
                        <span>Filtro</span>
                    </label>
                    <input type="search" class="p_info" id="p_filtro_menu" placeholder="Digite aqui o que procura">
                </div>`;const trataFiltro=(str)=>{return str.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase()}
filtro.querySelector('input').addEventListener('input',(e)=>{const busca=e.target.value;if(busca!==''){itens.forEach(li=>{li.style.display='none';const textoItem=trataFiltro(li.querySelector('.p_link_menu').innerText);if(textoItem.indexOf(trataFiltro(busca))>-1){li.style.display='';li.closest('.p_submenu').closest('li').style.display=''}})}else{itens.forEach(li=>{li.style.display=''})}});filtro.querySelector('input').addEventListener('blur',()=>{if(!menuTodos.querySelector(':hover')){menuTodos.classList.remove('show')}});menuTodos.querySelector('.p_submenu').prepend(filtro)}}
if(parametrosTopo.menu_cont_topo){elementoTopo.querySelector('.p_cont_topo').append(menuTopo)}
insereItensMenu();sw_funcoes.push(insereItensMenu)}catch(error){console.error('SW Menu Topo:',error)}}
document.addEventListener('DOMContentLoaded',()=>{const topoPadrao=document.querySelector('.p_topo');if(topoPadrao){const parametrosTopo=swJsonInput(topoPadrao.querySelector('input.parametros_topo'));const jsonMenus=swJsonInput(document.querySelector('input.json_menu_topo'));swMenuTopo(parametrosTopo,topoPadrao,jsonMenus);const acessoFacilTopo=topoPadrao.querySelector('.p_area_acesso_facil_topo');if(acessoFacilTopo){acessoFacilTopo.querySelector('.p_cont_acesso_facil').classList.add(parametrosTopo.acesso_facil);acessoFacilTopo.querySelector('.p_cont_acesso_facil').classList.add(parametrosTopo.abrir_clique?'abrir_clique':'abrir_hover');const parametrosAcessoFacil={...parametrosTopo,exibicao_links:parametrosTopo.acesso_facil}
acessoFacilTopo.querySelectorAll('.p_menu_acesso_facil').forEach((menu)=>{swAcessoFacil(menu,parametrosAcessoFacil,!1)})}
const parametrosAcessibilidade={media:'todas',layout:parametrosTopo.acessibilidade}
if(parametrosTopo.acessibilidade==='a3'){parametrosAcessibilidade.caminho=topoPadrao.querySelector('.p_cont_acessibilidade')}
sw_acessibilidade(parametrosAcessibilidade);if(topoPadrao.classList.contains('e1')){const conteudoEstrutura=document.createElement('div');conteudoEstrutura.innerHTML=`
            <div class="p_barra_topo">
                <div class="p_cont_barra_topo p_conteudo_interno p_cont"></div>
            </div>
            <div class="p_area_brasao"></div>
            <div class="p_area_busca_redes"></div>
            <div class="p_area_acesso"></div>`;if(topoPadrao.querySelector('.p_brasao')){conteudoEstrutura.querySelector('.p_area_brasao').append(topoPadrao.querySelector('.p_brasao'))}
if(topoPadrao.querySelector('.p_busca')){conteudoEstrutura.querySelector('.p_area_busca_redes').append(topoPadrao.querySelector('.p_busca'))}
if(topoPadrao.querySelector('.p_area_redes_sociais')){conteudoEstrutura.querySelector('.p_area_busca_redes').append(topoPadrao.querySelector('.p_area_redes_sociais'))}
if(topoPadrao.querySelector('.p_area_acessibilidade')){conteudoEstrutura.querySelector('.p_area_acesso').append(topoPadrao.querySelector('.p_area_acessibilidade'))}
if(topoPadrao.querySelector('.p_area_acesso_facil')){conteudoEstrutura.querySelector('.p_area_acesso').append(topoPadrao.querySelector('.p_area_acesso_facil'))}
if(topoPadrao.querySelector('.p_area_sessao')){conteudoEstrutura.querySelector('.p_area_acesso').append(topoPadrao.querySelector('.p_area_sessao'))}
topoPadrao.querySelectorAll('.p_item_topo').forEach(item=>{conteudoEstrutura.querySelector('.p_cont_barra_topo').append(item)});if(conteudoEstrutura.querySelector('.p_cont_barra_topo').firstElementChild){topoPadrao.prepend(conteudoEstrutura.querySelector('.p_barra_topo'))}
for(const estrutura of conteudoEstrutura.childNodes){if(estrutura.nodeType===1&&estrutura.querySelector('.p_item_topo')){topoPadrao.querySelector('.p_cont_topo').append(estrutura)}}}else if(topoPadrao.classList.contains('e2')){const conteudoEstrutura=document.createElement('div');conteudoEstrutura.innerHTML=`
            <div class="p_faixa p_faixa1">
                <div class="p_cont_faixa p_conteudo_interno p_cont"></div>
            </div>
            <div class="p_faixa p_faixa2">
                <div class="p_cont_faixa p_conteudo_interno p_cont"></div>
            </div>
            <div class="p_faixa p_faixa3">
                <div class="p_cont_faixa p_conteudo_interno p_cont"></div>
            </div>`;if(topoPadrao.querySelector('.p_menu_topo')){conteudoEstrutura.querySelector('.p_faixa2 .p_cont_faixa').append(topoPadrao.querySelector('.p_menu_topo'))}
if(topoPadrao.querySelector('.p_brasao')){conteudoEstrutura.querySelector('.p_faixa3 .p_cont_faixa').append(topoPadrao.querySelector('.p_brasao'))}
if(topoPadrao.querySelector('.p_area_redes_sociais')){conteudoEstrutura.querySelector('.p_faixa3 .p_cont_faixa').append(topoPadrao.querySelector('.p_area_redes_sociais'))}
if(topoPadrao.querySelector('.p_busca')){conteudoEstrutura.querySelector('.p_faixa3 .p_cont_faixa').append(topoPadrao.querySelector('.p_busca'))}
if(topoPadrao.querySelector('.p_area_acesso_facil')){conteudoEstrutura.querySelector('.p_faixa3 .p_cont_faixa').append(topoPadrao.querySelector('.p_area_acesso_facil'))}
if(topoPadrao.querySelector('.p_area_sessao')){conteudoEstrutura.querySelector('.p_faixa3 .p_cont_faixa').append(topoPadrao.querySelector('.p_area_sessao'))}
topoPadrao.querySelectorAll('.p_item_topo').forEach(item=>{conteudoEstrutura.querySelector('.p_faixa1 .p_cont_faixa').append(item)});topoPadrao.querySelector('.p_cont_topo').remove();for(const estrutura of conteudoEstrutura.childNodes){if(estrutura.nodeType===1&&(estrutura.querySelector('.p_item_topo')||estrutura.querySelector('.p_menu_topo'))){topoPadrao.append(estrutura)}}}}})