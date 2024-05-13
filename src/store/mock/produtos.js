const orgProdutos = [
	{
		id: 0,
		titulo: 'Assistente virtual',
		descricao: 'Conheça nosso smart speaker de maior sucesso ainda melhor. O novo design de áudio com direcionamento frontal (1 speaker de 1,6") garante mais graves e um som completo.',
		foto: '/assets/itens/assistente-virtual.png',
		favorito: false,
		preco: 285,
		categoria: 'eletronicos',
		anunciante: 'Fulano de Tal'
	},
	{
		id: 1,
		titulo: 'AirPods com Estojo de Recarga',
		descricao: 'Os AirPods ligam automaticamente e estão sempre conectados e sabem quando estão nos seus ouvidos e pausam quando são tirados. Para ajustar o volume, trocar de música, fazer uma ligação.',
		foto: '/assets/itens/airpod.png',
		favorito: false,
		preco: 900,
		categoria: 'eletronicos',
		anunciante: 'Fulano de Tal'
	},
	{
		id: 2,
		titulo: 'Tablet Wi-Fi',
		descricao: 'Com o chip A12Z Bionic, o novo Tablet Pro garante maior fluidez em tarefas diárias, trabalhos e muito mais edite vídeos em 4K, crie objetos 3D e utilize realidade aumentada de forma natural e instantânea.',
		foto: '/assets/itens/tablet.png',
		favorito: false,
		preco: 637,
		categoria: 'eletronicos',
		anunciante: 'Fulano de Tal'
	},
	{
		id: 3,
		titulo: 'Assistente virtual com tela',
		descricao: 'Desenvolvido para se mover com você: com um display HD de 10,1" que se move automaticamente, as chamadas de vídeo, as receitas e os filmes e séries estarão sempre à vista. Os alto-falantes oferecem som direcional premium e de alta qualidade.',
		foto: '/assets/itens/assistente-virtual-tela.png',
		favorito: false,
		preco: 1600,
		categoria: 'eletronicos',
		anunciante: 'Fulano de Tal'
	},
	{
		id: 4,
		titulo: 'Leitor de livros digitais',
		descricao: 'O Leitor de livros digitais com a maior e melhor resolução - tela Paperwhite de 7" e 300 ppi. Leia como se fosse em papel, sem reflexo, mesmo sob a luz do sol.',
		foto: '/assets/itens/leitor-livros.png',
		favorito: false,
		preco: 447,
		categoria: 'eletronicos',
		anunciante: 'Fulano de Tal'
	},
	{
		id: 5,
		titulo: 'Almofada de assento',
		descricao: 'Feito de material de couro, confortável e suave. Couro ambiental natural dá uma sensação delicada. Adequado para uso durante todo o ano. Com as funções de aquecimento e ventilação do assento de carro podem ser usadas normalmente.',
		foto: '/assets/itens/assento.png',
		favorito: false,
		preco: 45.9,
		categoria: 'automotivos',
		anunciante: 'Fulano de Tal'
	},
	{
		id: 6,
		titulo: 'Capa de volante de couro',
		descricao: 'Esta capa de volante feita de couro sintético, antiderrapante, respirável. 100% SEM ODOR: elástico saudável e ecológico, não tóxico, durável. Melhor aderência no volante proporciona uma ótima e confortável experiência de direção.',
		foto: '/assets/itens/capa-volante-couro.png',
		favorito: false,
		preco: 150,
		categoria: 'automotivos',
		anunciante: 'Fulano de Tal'
	},
	{
		id: 7,
		titulo: 'Organizador lateral',
		descricao: 'Aumente mais espaço e garanta a segurança – todos os motoristas sabem que é muito perigoso que nosso telefone caia na lacuna entre o assento frontal e o lado do console durante a condução, este enchimento de lacuna de assento de carro cria armazenamento extra para você para evitar que coisas perigosas aconteçam, pode armazenar coisas como smartphone, carteira,que garante a condução segura.',
		foto: '/assets/itens/organizador-lateral.png',
		favorito: false,
		preco: 149.9,
		categoria: 'automotivos',
		anunciante: 'Fulano de Tal'
	},
	{
		id: 8,
		titulo: 'Capa de volante de cristais',
		descricao: 'Material da capa do volante de cristal: Couro de alta qualidade e artesanato em diamante: mais estável em comparação com outros mesmos produtos, e não machuca suas mãos. Esta capa de volante brilhante para mulheres meninas é universal para volante com diâmetro de 37-38 cm/14,5-15 pol. ',
		foto: '/assets/itens/capa-volante-cristais.png',
		favorito: false,
		preco: 290,
		categoria: 'automotivos',
		anunciante: 'Fulano de Tal'
	},
	{
		id: 9,
		titulo: 'Suporte Veicular',
		descricao: 'Com o Suporte Veicular Magnetico 3 em 1 i2GO PRO você posiciona seu Smartphone de qualquer tamanho e outros dispositivos onde quiser de maneira fácil e segura. Ideal para o utilização de aplicativos de GPS e controlar músicas no carro, assistir a filmes e séries em casa, além de atender chamadas de vídeo e conferir documentos e mensagens no escritório.',
		foto: '/assets/itens/suporte-veicular.png',
		favorito: false,
		preco: 59.9,
		categoria: 'automotivos',
		anunciante: 'Fulano de Tal'
	},
	{
		id: 10,
		titulo: 'Console',
		descricao: 'O console que está em pré-venda oferece novas possibilidades de jogabilidade que você nunca imaginou. Além disso, você também pode baixar jogos digitais, Experimente o carregamento extremamente rápido do SSD de 825GB com ultra-velocidade, uma imersão mais profunda com suporte à resposta tátil, gatilhos adaptáveis e áudio 3D.',
		foto: '/assets/itens/console-1.png',
		favorito: false,
		preco: 4300,
		categoria: 'jogos',
		anunciante: 'Fulano de Tal'
	},
	{
		id: 11,
		titulo: 'Jogo para console',
		descricao: 'Embarque em uma jornada épica e comovente e lute contra queles que desafiam o destino que anseia por conhecimento para ajudá-lo a entender a profecia e o papel que ele desempenhará. Você deve decidir se será acorrentado pelo medo de repetir seus erros ou se libertar de seu passado para ser o pai que precisa.',
		foto: '/assets/itens/jogo-1.png',
		favorito: false,
		preco: 299.9,
		categoria: 'jogos',
		anunciante: 'Fulano de Tal'
	},
	{
		id: 12,
		titulo: 'Console',
		descricao: 'Menor e mais elegante de todos os tempos. Com taxas de quadros mais altas, tempos de carregamento mais rápidos e mundos mais ricos e dinâmicos, oferece desempenho e velocidade de última geração em um formato compacto e totalmente digital e também possui os melhores serviços para jogadores de todos os tipos.',
		foto: '/assets/itens/console-2.png',
		favorito: false,
		preco: 4349,
		categoria: 'jogos',
		anunciante: 'Fulano de Tal'
	},
	{
		id: 13,
		titulo: 'Controle joystick sem fio',
		descricao: 'Este controle combina funções revolucionárias, preservando precisão, conforto e exatidão em cada movimento. Graças à sua ergonomia especialmente projetada para a posição da sua mão, você pode passar horas jogando com total conforto.',
		foto: '/assets/itens/manete.png',
		favorito: false,
		preco: 279,
		categoria: 'jogos',
		anunciante: 'Fulano de Tal'
	},
	{
		id: 14,
		titulo: 'Jogo para console',
		descricao: 'Em sua mais nova aventura um adolescente está se ajustando a sua nova casa mas quando uma luta feroz pelo poder ameaça destruir sua nova casa, o aspirante a herói percebe que com grandes poderes, também deve vir uma grande responsabilidade para salvar toda a Nova Iorque deve assumir o manto de herói.',
		foto: '/assets/itens/jogo-2.png',
		favorito: false,
		preco: 349.9,
		categoria: 'jogos',
		anunciante: 'Fulano de Tal'
	},
	{
		id: 15,
		titulo: 'Organizador de Mesa',
		descricao: 'Moderno, funcional e versátil com acabamento em plástico de alta qualidade e construção robusta que se adapta a qualquer ambiente. (5 compartimentos e 1 divisão na parte traseira). Em sua área de trabalho, mantenha tudo limpo e organizado, como caneta, lápis, tesoura, clipes, notas adesivas, acessórios e muito mais para economizar espaço com estilo.',
		foto: '/assets/itens/guarda-treco.png',
		favorito: false,
		preco: 19.9,
		categoria: 'escritorio',
		anunciante: 'Fulano de Tal'
	},
	{
		id: 16,
		titulo: 'Caderno Inteligente',
		descricao: 'Caderno inteligente com calendário, elástico para caneta e divisórias Formato: 215 x 280 mm (lxa) Com 60 folhas pautadas e 20 folhas lisas brancas de 90 gramas que você tira e coloca quando quiser Fabricado com muito cuidado e atenção aos detalhes',
		foto: '/assets/itens/caderno.png',
		favorito: false,
		preco: 285,
		categoria: 'escritorio',
		anunciante: 'Fulano de Tal'
	},
	{
		id: 17,
		titulo: 'Cadeira de Escritório',
		descricao: 'Base giratória em 360º de polipropileno com 5 rodízios;Ajuste de altura a gás;Encosto com estrutura de madeira com estofamento revestido em couro PU;Assento com madeira multi laminada com estofamento revestido em couro PU;Braços em polipropileno com estofamento revestido em couro PU; Espuma com densidade controlada.',
		foto: '/assets/itens/cadeira.png',
		favorito: false,
		preco: 629,
		categoria: 'escritorio',
		anunciante: 'Fulano de Tal'
	},
	{
		id: 18,
		titulo: 'Papel Sulfite A4 75g 500 folhas',
		descricao: 'Desenvolvido para ser utilizado em atividades escolares e profissionais corte perfeito e equilibrada absorção, permite melhor deslizamento do papel na impressora. Produzido com eucalipto 100% renovável e as fibras são tratadas para obter o mais elevado grau de brancura. Chamex garante excelente performance em equipamentos e impressoras de alta velocidade, com 99% de não atolamento das folhas em sua impressora.',
		foto: '/assets/itens/papel.png',
		favorito: false,
		preco: 27.6,
		categoria: 'escritorio',
		anunciante: 'Fulano de Tal'
	},
	{
		id: 19,
		titulo: 'Arquivo Estreito com Furação',
		descricao: 'Ideal para a organização de pastas e papéis. Organize seus documentos e pastas suspensas em um só lugar, poupando espaço em gavetas. Possui encaixe para acomodas as pastas sem amassar. Contém furos para ventilação do organizador e design diferenciado. Organiza e deixa seu ambiente mais bonito.',
		foto: '/assets/itens/organizador-pastas.png',
		favorito: false,
		preco: 44.9,
		categoria: 'escritorio',
		anunciante: 'Fulano de Tal'
	},
	{
		id: 20,
		titulo: 'TV Smart 50"',
		descricao: 'A Smart TV LED 50" equipada com a tecnologia de Business TV que permite configurar a TV tanto para o modo residencial quanto para o modo hotel, trazendo uma maior variedade de configurações e personalizações para sua TV. Além de possui uma ótima qualidade de imagem 4K.',
		foto: '/assets/itens/tv-50.png',
		favorito: false,
		preco: 2600,
		categoria: 'som',
		anunciante: 'Fulano de Tal'
	},
	{
		id: 21,
		titulo: 'Smart TV 60" 4K UHD',
		descricao: 'Smart TV LG 60" 4K UHD WiFi Bluetooth Inteligência Artificial, Painel de Controle, Processamento Natural de Linguagem, AI Recommendation, Otimizador de Games, Channels, Edição Inteligente de Apps e Media Player.',
		foto: '/assets/itens/tv-60.png',
		favorito: false,
		preco: 3359,
		categoria: 'som',
		anunciante: 'Fulano de Tal'
	},
	{
		id: 22,
		titulo: 'Caixa de Som',
		descricao: 'A caixa de som 710 à prova de respingos transforma seu próximo evento em uma verdadeira festa, show ou balada. Show de luzes único e colorido sincronizado com seu aparelho de celular. Botões minimalistas e intuitivos no painel superior e o aplicativo permitem criar experiências musicais e visuais de alto nível. Com luzes estroboscópicas piscantes personalizáveis e o som incrível do conjunto duplo de tweeters e woofers ricos em graves.',
		foto: '/assets/itens/caixa-som.png',
		favorito: false,
		preco: 5817.33,
		categoria: 'som',
		anunciante: 'Fulano de Tal'
	},
	{
		id: 23,
		titulo: 'Caixa de Som Bluetooth',
		descricao: 'Caixa de som oferece o ousado som com driver de longa excursão otimizado, tweeter separado e dois radiadores de graves. Até 20 horas de reprodução e um prático powerbank para manter carregados os dispositivos que fazem a festa a noite toda.',
		foto: '/assets/itens/caixa-som-bluetooth.png',
		favorito: false,
		preco: 1199,
		categoria: 'som',
		anunciante: 'Fulano de Tal'
	},
	{
		id: 24,
		titulo: 'Mini System com Função karaokê',
		descricao: 'Moderno e superpotente, o Mini System vai reproduzir suas músicas com qualidade máxima nos mais diversos formatos, como MP3, WMA CD, CD-R e CD-RW. E, se a ideia for promover festas e encontros animados, a função karaokê, a conexão Bluetooth e as duas portas USB serão bastante úteis.',
		foto: '/assets/itens/mini-system.png',
		favorito: false,
		preco: 782.91,
		categoria: 'som',
		anunciante: 'Fulano de Tal'
	},
	{
		id: 25,
		titulo: 'Coifa Câmbio Palio Economy',
		descricao: 'Produto de excelente qualidade, alta resistência, funcional, perfeito para quem teve recentes problemas com a coifa original do seu carro. Compatível com Palio Economy 2011 2012 2013 2014',
		foto: 'https://http2.mlstatic.com/D_NQ_NP_955826-MLB48818770882_012022-O.webp',
		favorito: false,
		preco: 47.6,
		categoria: 'automotivos',
		anunciante: 'Renan Santos'
	},
	{
		id: 26,
		titulo: 'Notas autoadesivas',
		descricao: 'Nota Autoadesiva 38X51Mm 100Flsx4 Neon, blocos em 4 cores neon contendo 100 folhas de cada cor.',
		foto: 'https://m.media-amazon.com/images/I/517LfXVUw6L._AC_UF894,1000_QL80_DpWeblab_.jpg',
		favorito: false,
		preco: 12.99,
		categoria: 'escritorio',
		anunciante: 'Renan Santos'
	},
]

export default orgProdutos