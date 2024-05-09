/* eslint-disable react/no-unknown-property */
/* eslint-disable react/react-in-jsx-scope */
import './abaixoAssinados.css'

const petitionData = {
	title: 'title',
	description: 'Essa é uma descrição de abaixo assinado',
	createdAt: new Date(),
	range: 'near' | 'city' | 'country',
	location: {
		city: 'Londrina',
		country: 'Brasil',
		district: 'Palhano 2',
		geohashNearby: ['geo','hash'],
		number: '50',
		postalCode: '86055-650',
		state: 'Paraná',
		street: 'Rua Guilherme Farel',
	},
	owner: {
		userId: '1',
		name: 'José Alencar',
		profilePictureUrl: []
	},
	idUsersResponded: ['userId1','userId2','userId3'],
	completed: false,
	picturesUrl: [''],
	extraIdentificationRequest: ['rg','cpf','telefone'],
	privateResponses: [
		{
			userId: 'userId1',
			userName: 'Rafael Betão Betão Betão Betão Betão Betão',
			email: 'gatinhofofo123@gmail.com',
			cellNumber: '69 992846588',
			rg: '155525',
			cpf: '04455488789',
			location: {
				city: 'Londrina',
				country: 'Brasil',
				district: 'Palhano 2',
				geohashNearby:['geo','hash'],
				number: '50',
				postalCode: '86055-650',
				state: 'Paraná',
				street: 'Rua Rafa Farel',
			},
		},
		{
			userId: 'userId2',
			userName: 'Luizera da Silva',
			email: 'miau@gmail.com',
			cellNumber: '22 992846588',
			rg: '225525',
			cpf: '22455488722',
			location: {
				city: 'Ibiporã',
				country: 'Brasil',
				district: 'Centro',
				geohashNearby:['geo','hash'],
				number: '50',
				postalCode: '86055-650',
				state: 'Paraná',
				street: 'Rua Luis Farel',
			},
		},
		{
			userId: 'userId2',
			userName: 'Luizera da Silva',
			email: 'miau@gmail.com',
			cellNumber: '22 992846588',
			rg: '225525',
			cpf: '22455488722',
			location: {
				city: 'Ibiporã',
				country: 'Brasil',
				district: 'Centro',
				geohashNearby:['geo','hash'],
				number: '50',
				postalCode: '86055-650',
				state: 'Paraná',
				street: 'Rua Luis Farel',
			},
		},
		{
			userId: 'userId2',
			userName: 'Luizera da Silva',
			email: 'miau@gmail.com',
			cellNumber: '22 992846588',
			rg: '225525',
			cpf: '22455488722',
			location: {
				city: 'Ibiporã',
				country: 'Brasil',
				district: 'Centro',
				geohashNearby:['geo','hash'],
				number: '50',
				postalCode: '86055-650',
				state: 'Paraná',
				street: 'Rua Luis Farel',
			},
		},
		{
			userId: 'userId2',
			userName: 'Luizera da Silva',
			email: 'miau@gmail.com',
			cellNumber: '22 992846588',
			rg: '225525',
			cpf: '22455488722',
			location: {
				city: 'Ibiporã',
				country: 'Brasil',
				district: 'Centro',
				geohashNearby:['geo','hash'],
				number: '50',
				postalCode: '86055-650',
				state: 'Paraná',
				street: 'Rua Luis Farel',
			},
		},
		{
			userId: 'userId2',
			userName: 'Luizera da Silva',
			email: 'miau@gmail.com',
			cellNumber: '22 992846588',
			rg: '225525',
			cpf: '22455488722',
			location: {
				city: 'Ibiporã',
				country: 'Brasil',
				district: 'Centro',
				geohashNearby:['geo','hash'],
				number: '50',
				postalCode: '86055-650',
				state: 'Paraná',
				street: 'Rua Luis Farel',
			},
		},
		{
			userId: 'userId2',
			userName: 'Luizera da Silva',
			email: 'miau@gmail.com',
			cellNumber: '22 992846588',
			rg: '225525',
			cpf: '22455488722',
			location: {
				city: 'Ibiporã',
				country: 'Brasil',
				district: 'Centro',
				geohashNearby:['geo','hash'],
				number: '50',
				postalCode: '86055-650',
				state: 'Paraná',
				street: 'Rua Luis Farel',
			},
		},
		{
			userId: 'userId2',
			userName: 'Luizera da Silva',
			email: 'miau@gmail.com',
			cellNumber: '22 992846588',
			rg: '225525',
			cpf: '22455488722',
			location: {
				city: 'Ibiporã',
				country: 'Brasil',
				district: 'Centro',
				geohashNearby:['geo','hash'],
				number: '50',
				postalCode: '86055-650',
				state: 'Paraná',
				street: 'Rua Luis Farel',
			},
		},
		{
			userId: 'userId2',
			userName: 'Luizera da Silva',
			email: 'miau@gmail.com',
			cellNumber: '22 992846588',
			rg: '225525',
			cpf: '22455488722',
			location: {
				city: 'Ibiporã',
				country: 'Brasil',
				district: 'Centro',
				geohashNearby:['geo','hash'],
				number: '50',
				postalCode: '86055-650',
				state: 'Paraná',
				street: 'Rua Luis Farel',
			},
		},
	]
}

const renderHtmlHeader = () => (
	// Deve ser "head"
	<>
		<meta charSet={'UTF-8'} />
		<meta name={'viewport'} content={'width=device-width, initial-scale=1.0'} />
		<title>{'Gráfico de Barras Horizontais'}</title>
	</>
)

const renderPollHeader = () => {
	const numberOfResponses = ` ${petitionData.privateResponses.length}`
	
	return (
		<>
			<svg width="100" height="100" viewBox="0 0 250 215" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M0 158.824V78.0862C0 72.464 4.54751 67.9052 10.181 67.9052H22.3756V41.1112C22.3756 35.4891 26.9457 30.9303 32.5566 30.9303H111.923V10.928C111.923 5.30588 116.493 0.74707 122.104 0.74707H187.24C192.873 0.74707 197.421 5.30588 197.421 10.928V26.5229H239.819C242.511 26.5229 245.113 27.5954 247.014 29.5049C248.914 31.4144 250 34.0048 250 36.7039V154.751V196.884C250 197.016 250 197.149 250 197.28C250 201.02 248.19 206.108 245.023 209.283C241.833 212.464 237.534 214.253 233.032 214.253C232.557 214.253 216.538 214.253 216.063 214.253C213.597 214.253 211.199 213.719 209.005 212.719C205.882 213.715 202.534 214.253 199.072 214.253H182.104C177.67 214.253 173.439 213.366 169.57 211.76C167.783 213.312 165.452 214.253 162.896 214.253H100.679C99.6833 214.253 98.7557 214.113 97.8507 213.855C96.1991 214.117 94.4796 214.253 92.7376 214.253H75.7692C71.1538 214.253 66.7647 213.294 62.7602 211.566C58.7783 213.294 54.3891 214.253 49.7511 214.253H32.7828C14.6833 214.253 0 199.554 0 181.448V158.824Z" fill="black"/>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M215.995 190.495C214.194 190.495 212.47 191.211 211.194 192.484C209.923 193.756 209.208 195.483 209.208 197.283C209.208 197.284 209.208 197.286 209.208 197.288C209.208 199.088 209.923 200.814 211.194 202.087C212.47 203.36 214.194 204.075 215.995 204.075C217.796 204.075 219.525 203.36 220.796 202.087C222.068 200.815 222.783 199.088 222.783 197.289C222.783 197.286 222.783 197.284 222.783 197.282C222.783 195.482 222.068 193.756 220.796 192.483C219.525 191.211 217.796 190.495 215.995 190.495ZM75.715 158.826C63.2353 158.826 53.0996 168.964 53.0996 181.451C53.0996 193.937 63.2353 204.075 75.715 204.075C88.1991 204.075 98.3348 193.937 98.3348 181.451C98.3348 168.964 88.1991 158.826 75.715 158.826ZM111.923 197.285H116.448V204.075H100.611V197.285H105.136V158.826H111.923V165.297C116.004 161.295 121.593 158.826 127.751 158.826V165.616C119.018 165.616 111.923 172.711 111.923 181.451V197.285ZM141.335 165.297C145.416 161.295 151.004 158.826 157.163 158.826V165.616C148.43 165.616 141.335 172.711 141.335 181.451V197.285H145.86V204.075H130.023V197.285H134.547V158.826H141.335V165.297ZM50.8191 195.027C46.6924 200.52 40.1223 204.075 32.7286 204.075C20.249 204.075 10.1133 193.937 10.1133 181.451C10.1133 168.964 20.249 158.826 32.7286 158.826C40.1223 158.826 46.6924 162.381 50.8191 167.875L45.3892 171.949C42.5023 168.104 37.9051 165.616 32.7286 165.616C23.9956 165.616 16.9006 172.711 16.9006 181.451C16.9006 190.19 23.9956 197.285 32.7286 197.285C37.9051 197.285 42.5023 194.797 45.3892 190.952L50.8191 195.027ZM166.588 184.846C168.14 191.955 174.479 197.285 182.05 197.285C187.226 197.285 191.823 194.795 194.715 190.948L200.14 195.022C196.013 200.518 189.443 204.075 182.05 204.075C169.57 204.075 159.434 193.937 159.434 181.451C159.434 168.964 169.57 158.826 182.05 158.826C194.534 158.826 204.669 168.964 204.669 181.451H204.66L204.669 181.459V184.846H166.588ZM75.715 165.616C84.4525 165.616 91.5475 172.711 91.5475 181.451C91.5475 190.19 84.4525 197.285 75.715 197.285C66.9819 197.285 59.8869 190.19 59.8869 181.451C59.8869 172.711 66.9819 165.616 75.715 165.616ZM197.516 178.056H166.588C168.14 170.946 174.479 165.616 182.05 165.616C189.624 165.616 195.959 170.946 197.516 178.056Z" fill="white"/>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M14.8768 148.643L14.8768 127.056H50.0554L50.0554 148.643H54.8525L54.8525 89.2811H32.4664V78.0879H10.0799L10.0799 148.643H14.8768ZM37.2585 109.273H14.8709V115.669H37.2585V109.273ZM18.0698 110.869H16.4688V114.067H18.0698V110.869ZM24.47 86.0846H18.0727V92.4806H24.47V86.0846ZM21.2719 87.6811H19.6731V90.8791H21.2719V87.6811ZM38.855 109.273H50.0479V115.669H38.855V109.273ZM40.4527 110.869H42.0519V114.067H40.4527V110.869Z" fill="#B274F0"/>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M118.686 78.0908H73.912V100.477H118.686V78.0908ZM88.308 85.2882H81.912V91.6842H88.308V85.2882ZM85.1088 86.8847H83.5097V90.0827H85.1088V86.8847ZM104.296 85.2882H110.692V88.4862H104.296V85.2882Z" fill="#FB9C37"/>
				<path d="M222.793 36.707H220.394V62.1248H222.793V36.707Z" fill="#88D0AC"/>
				<path d="M158.049 36.7041H155.649V62.1218H158.049V36.7041Z" fill="#88D0AC"/>
				<path d="M179.569 36.707H177.17V62.1247H179.569V36.707Z" fill="#88D0AC"/>
				<path d="M201.18 36.709H198.781V62.1267H201.18V36.709Z" fill="#88D0AC"/>
				<path d="M99.6531 42.457H96.4551L96.4551 65.3554H99.6531L99.6531 42.457Z" fill="#F3A797"/>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M66.1127 44.3133V63.5011H99.6874V74.6956H32.5381V41.1143H99.6874V44.3133H96.4974H66.1127ZM54.9137 50.7115H43.7372V57.1074H54.9137V50.7115ZM46.9272 52.3065V55.5056H45.3209V52.3065H46.9272Z" fill="#E84F30"/>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M152.197 78.0879H122.016V10.9297H170.183V33.312H155.59C153.712 33.312 152.197 34.83 152.197 36.7033V78.0879ZM137.966 63.6965H131.201V68.4906H130.025V70.0879H131.201V70.0924H137.966V70.0879H139.142V68.4906H137.966V63.6965ZM160.998 18.9229H154.255V23.7193H153.079V25.3188H154.255H160.998H162.197V23.7193H160.998V18.9229ZM131.201 18.9229V23.7193H130.025V25.3188H131.201H137.966H139.142V23.7193H137.966V18.9229H131.201ZM137.966 41.3097H131.201V46.1061H130.025V47.7056H131.201H137.966H139.142V46.1061H137.966V41.3097Z" fill="#C9731D"/>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M197.187 100.472V88.4784C197.187 87.2046 196.689 85.9851 195.784 85.0869C194.879 84.1865 193.68 83.682 192.391 83.682C191.124 83.682 189.902 84.1865 188.997 85.0869C188.115 85.9851 187.594 87.2046 187.594 88.4784V100.472H155.626V59.0915H222.775V148.639H197.21V100.472H197.187ZM167.617 65.4875C166.554 65.4875 165.535 65.9083 164.789 66.6594C164.042 67.4083 163.612 68.4241 163.612 69.4852H168.409V65.4875H167.617ZM170.015 71.0848V75.0803H174.811V71.0848H170.015ZM181.214 69.4852C181.214 68.4241 180.784 67.4083 180.038 66.6594C179.291 65.9083 178.273 65.4875 177.21 65.4875H176.418V69.4852H181.214ZM168.409 71.0848H163.612C163.612 72.1436 164.042 73.1616 164.789 73.9105C165.535 74.6594 166.554 75.0803 167.617 75.0803H168.409V71.0848ZM174.811 65.4875H170.015V69.4852H174.811V65.4875ZM214.789 71.0848H209.992V75.0803H210.784C211.848 75.0803 212.866 74.6594 213.612 73.9105C214.359 73.1616 214.789 72.1436 214.789 71.0848ZM176.418 71.0848V75.0803H177.21C178.273 75.0803 179.291 74.6594 180.038 73.9105C180.784 73.1616 181.214 72.1436 181.214 71.0848H176.418ZM209.992 65.4875V69.4852H214.789C214.789 68.4241 214.359 67.4083 213.612 66.6594C212.866 65.9083 211.848 65.4875 210.784 65.4875H209.992ZM207.594 65.4875C206.531 65.4875 205.513 65.9083 204.766 66.6594C204.02 67.4083 203.59 68.4241 203.59 69.4852H208.386V65.4875H207.594ZM208.386 71.0848H203.59C203.59 72.1436 204.02 73.1616 204.766 73.9105C205.513 74.6594 206.531 75.0803 207.594 75.0803H208.386V71.0848ZM222.798 36.707V39.9039H155.626V36.707H222.798ZM191.599 91.872C191.825 91.872 192.029 91.9557 192.164 92.1073C192.323 92.2566 192.413 92.4602 192.413 92.6729C192.413 92.8833 192.323 93.0869 192.164 93.2385C192.029 93.3878 191.825 93.4716 191.599 93.4716H190.015C189.789 93.4716 189.585 93.3878 189.45 93.2385C189.291 93.0869 189.201 92.8833 189.201 92.6729C189.201 92.4602 189.291 92.2566 189.45 92.1073C189.585 91.9557 189.789 91.872 190.015 91.872H191.599Z" fill="#12A159"/>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M122.042 81.4824H125.232V84.6815H128.445V87.8805H131.635V91.0774H134.825V94.2742H138.037V97.471H141.228V100.672H144.44V103.869H166.816V148.643H148.829V136.254C148.829 133.824 146.861 131.856 144.44 131.856C141.997 131.856 140.028 133.824 140.028 136.254V148.643H122.042V81.4824ZM130.843 115.865V120.661H129.237V122.261H130.843V122.263H137.223V122.261H138.829V120.661H137.223V115.865C137.223 115.019 136.906 114.204 136.295 113.604C135.707 113.005 134.893 112.668 134.033 112.668C133.196 112.668 132.381 113.005 131.77 113.604C131.182 114.204 130.843 115.019 130.843 115.865ZM132.427 115.862C132.427 114.98 133.151 114.265 134.033 114.265V119.061H132.427V115.862ZM159.621 120.661H158.015V115.867C158.015 115.018 157.675 114.204 157.087 113.604C156.476 113.005 155.662 112.668 154.825 112.668C153.06 112.668 151.612 114.1 151.612 115.867V120.661H150.028V122.261H151.612V122.263H158.015V122.261H159.621V120.661ZM154.825 114.265V119.061H153.218V115.862C153.218 114.98 153.942 114.265 154.825 114.265ZM146.273 139.98C146.703 139.98 147.065 140.337 147.065 140.781C147.065 141.222 146.703 141.579 146.273 141.579C145.82 141.579 145.458 141.222 145.458 140.781C145.458 140.337 145.82 139.98 146.273 139.98Z" fill="#FBCE37"/>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M103.044 103.867V148.641H84.6732V131.851H75.8723V148.641H58.2705V103.867H103.044ZM64.6732 112.664V121.458H73.4741V112.664H64.6732ZM70.2841 114.259H71.8678V119.856H70.2841V114.259ZM95.8497 112.664H87.0714V121.458H95.8497V112.664ZM94.266 114.259V119.856H92.6596V114.259H94.266ZM81.0986 139.182V140.781H77.9085V139.182H81.0986Z" fill="#FF8F68"/>
			</svg>
			<br/>
			<h2 className={'petition-title'}>{'Abaixo assinado - Nova praça pública dos imigrantes'}</h2>
			<p className={'petition-description'}>
				{'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem voluptates'}
				{'quaerat consectetur eaque optio. Laborum distinctio debitis impedit et doloremque ratione eius! Ea, amet!'}
				{'Commodi recusandae officiis obcaecati magnam?'}
			</p>
			<p className='petition-info'>{'Autor: '}<b>{petitionData.owner.name}</b></p>
			<p className='petition-info'>{'Local do abaixo assinado: '} <b>Bairro {petitionData.location.district}, {petitionData.location.city} - {petitionData.location.state}</b></p>
			<p className='petition-info'>{'Alcance: '}<b>Cidade</b></p>
			<p className='petition-info'>{'Data e publicação: '}<b>{petitionData.createdAt.toLocaleDateString()}</b></p>
			<p className={'responses-number'}>
				{'Total de respostas:'}
				<b>{numberOfResponses}</b>
			</p>
		</>
	)
}

const renderFooter = () => (
	<>
		<h4 className="author">Formulário criado utilizando o aplicativo corre.social</h4>
		<svg width="138" height="36" viewBox="0 0 138 36" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="evenodd" clip-rule="evenodd"
				d="M137.235 26.8056C137.235 29.2392 136.259 31.5741 134.526 33.2945C132.785 35.0156 130.431 35.9823 127.975 35.9823H118.711C117.373 35.9823 116.062 35.695 114.864 35.1528C113.155 35.6909 111.333 35.9823 109.444 35.9823H100.181C97.7529 35.9823 95.4418 35.5023 93.3313 34.635C92.3548 35.4746 91.0795 35.9823 89.6875 35.9823H55.7241C55.1891 35.9823 54.6726 35.9079 54.184 35.768C53.2758 35.9086 52.3451 35.9823 51.3973 35.9823H42.135C39.6117 35.9823 37.2105 35.4631 35.0331 34.5302C32.8543 35.4631 30.4538 35.9823 27.9318 35.9823H18.6689C8.78776 35.9823 0.764648 28.0332 0.764648 18.2408C0.764648 8.44902 8.78776 0.5 18.6689 0.5H27.9318C30.4538 0.5 32.8543 1.01781 35.0331 1.95271C37.2105 1.01781 39.6117 0.5 42.135 0.5H51.3973C52.9128 0.5 54.3846 0.68725 55.7903 1.03944C56.5183 0.693334 57.3331 0.5 58.1942 0.5H95.8574C96.393 0.5 96.9075 0.574359 97.3974 0.713614C98.3029 0.573007 99.233 0.5 100.181 0.5H109.444C119.117 0.5 127.009 8.11845 127.338 17.627H127.975C130.431 17.627 132.785 18.5937 134.526 20.3141C136.259 22.0351 137.235 24.3687 137.235 26.8023V26.8056C137.235 28.8329 137.235 28.8309 137.235 26.8056Z"
				fill="black" />
			<path fill-rule="evenodd" clip-rule="evenodd"
				d="M118.472 23.0113C117.476 23.0113 116.519 23.4062 115.817 24.1092C115.113 24.8129 114.717 25.767 114.717 26.7625V26.7653C114.717 27.7608 115.113 28.7149 115.817 29.4179C116.519 30.1216 117.476 30.5172 118.472 30.5172C119.467 30.5172 120.42 30.1216 121.126 29.4179C121.83 28.7149 122.223 27.7608 122.223 26.7653V26.7612C122.223 25.767 121.83 24.8129 121.126 24.1092C120.42 23.4062 119.467 23.0113 118.472 23.0113ZM42.0067 5.95215C35.2268 5.95215 29.7232 11.4562 29.7232 18.2347C29.7232 25.0131 35.2268 30.5172 42.0067 30.5172C48.7852 30.5172 54.2881 25.0131 54.2881 18.2347C54.2881 11.4562 48.7852 5.95215 42.0067 5.95215ZM61.7375 26.8311H64.2405V30.5172H55.4813V26.8311H57.9842V5.95215H61.7375V9.46454C63.995 7.29237 67.0863 5.95215 70.4933 5.95215V9.63826C65.6607 9.63826 61.7375 13.49 61.7375 18.2347V26.8311ZM77.7805 9.46454C80.038 7.29237 83.1272 5.95215 86.5363 5.95215V9.63826C81.7036 9.63826 77.7805 13.49 77.7805 18.2347V26.8311H80.2827V30.5172H71.5249V26.8311H74.0271V5.95215H77.7805V9.46454ZM28.4257 25.6042C26.1737 28.5859 22.5908 30.5172 18.5593 30.5172C11.7501 30.5172 6.22266 25.0131 6.22266 18.2347C6.22266 11.4562 11.7501 5.95215 18.5593 5.95215C22.5908 5.95215 26.1737 7.88139 28.4257 10.8638L25.464 13.076C23.8883 10.9893 21.3806 9.63826 18.5593 9.63826C13.7935 9.63826 9.92488 13.49 9.92488 18.2347C9.92488 22.9794 13.7935 26.8311 18.5593 26.8311C21.3806 26.8311 23.8883 25.48 25.464 23.3933L28.4257 25.6042ZM91.6117 20.0771C92.4523 23.9369 95.8948 26.8311 100.006 26.8311C102.818 26.8311 105.313 25.4786 106.883 23.3906L109.832 25.6028C107.588 28.5859 104.023 30.5172 100.006 30.5172C93.2269 30.5172 87.724 25.0131 87.724 18.2347C87.724 11.4562 93.2269 5.95215 100.006 5.95215C106.785 5.95215 112.289 11.4562 112.289 18.2347H112.282L112.289 18.2381V20.0771H91.6117ZM42.0067 9.63826C46.7507 9.63826 50.6022 13.49 50.6022 18.2347C50.6022 22.9794 46.7507 26.8311 42.0067 26.8311C37.2613 26.8311 33.4091 22.9794 33.4091 18.2347C33.4091 13.49 37.2613 9.63826 42.0067 9.63826ZM108.405 16.3909H91.6117C92.4523 12.5318 95.8948 9.63826 100.006 9.63826C104.118 9.63826 107.561 12.5318 108.405 16.3909Z"
				fill="white" />
		</svg>
	</>
)

const renderPetitionSignatures = () => {
	const tableCollumns = ['Nome completo','Email']
	if(petitionData.extraIdentificationRequest.includes('cpf')) tableCollumns.push('CPF')
	if(petitionData.extraIdentificationRequest.includes('rg')) tableCollumns.push('RG')
	if(petitionData.extraIdentificationRequest.includes('telefone')) tableCollumns.push('Telefone')
	if(petitionData.location.city) tableCollumns.push('Cidade')

	const renderTableHeader = () => {
		return (
			<div className='table-row' key={'tableCollumns'}>
					{
						tableCollumns.map((collumn) => {
							return (
								<div className='cell-data' key={collumn}>
									<p className='text-info bold'>{collumn}</p>
								</div>
							)
						})
					}
			</div>
		)
	}

	const renderTableRows = () => {
		return petitionData.privateResponses.map((response) => {
			const convertedTableCollumnsValue = {
				'Nome completo': 'userName',
				'Email': 'email',
				'CPF': 'cpf',
				'RG': 'rg',
				'Telefone': 'cellNumber',
				'Cidade': 'city'
			}
			
			return (
				<div className='table-row' key={response.userId}>
					{	
						Object.values(convertedTableCollumnsValue).map((column) => {
							if(column === 'city'){
								return  (
									<div className='cell-data' key={column}>
										<p className='text-info'>{response.location.city}</p>
									</div>
								)
							}
							return (
								<div className='cell-data' key={column}>
									<p className='text-info'>{response[column]}</p>
								</div>
							)
						})
					}
				</div>
			)
		})
	}
	
	return (
		<>
			<div className='card'>
				<div className='card-content'>
					{renderTableHeader()}
					{renderTableRows()}
				</div>
			</div>
		</>
	)
}

function AbaixoAssinados() {
	// Deve ser "html" o container
	return (
		<div /* lang={'pt-br'} */>
			{renderHtmlHeader()}
			<div className='body'>
				{renderPollHeader()}
				{renderPetitionSignatures()}
				{renderFooter()}
			</div>
		</div>
	)
}

export default AbaixoAssinados