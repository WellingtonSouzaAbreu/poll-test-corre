/* eslint-disable react/no-unknown-property */
/* eslint-disable react/react-in-jsx-scope */
import './App.css'

const pollData = {
	questions: [
		{
			questionId: '1',
			question: 'Quem veio primeiro, o ovo ou a galinha?',
			questionType: 'textual'
		},
		{
			questionId: '2',
			question: 'Escolha um número de 0 a 100?',
			questionType: 'numeric'
		},
		{
			questionId: '3',
			question: 'O quanto você gosta de nirvana?',
			questionType: 'satisfaction'
		},
		{
			questionId: '4',
			question: 'O quanto você gosta da música buddy?',
			questionType: 'satisfaction'
		},
		{
			questionId: '5',
			question: 'Você tem animal de estimação?',
			questionType: 'binary'
		},
		{
			questionId: '6',
			question: 'Você tem pc com luizinhas?',
			questionType: 'binary'
		}
	],
	privateResponses: [
		{
			userId: 'PusOCJGtL6cSrAhN8oePaUybLR42',
			location: {
				city: 'Londrina',
				country: 'Brasil',
				district: 'Palhano 2',
				geohashNearby: [Array],
				number: '50',
				postalCode: '86055-650',
				state: 'Paraná',
				street: 'Rua Guilherme Farel',
			},
			responses: [
				{
					questionId: '1',
					questionType: 'textual',
					response: 'Galinha',
				},

				{
					questionId: '2',
					questionType: 'numerical',
					response: 55,
				},
				{
					questionId: '2',
					questionType: 'numerical',
					response: 10,
				},

				{
					questionId: '3',
					questionType: 'satisfaction',
					response: 2,
				},

				{
					questionId: '4',
					questionType: 'satisfaction',
					response: 4,
				},

				{
					questionId: '5',
					questionType: 'binary',
					response: true,
				},

				{
					questionId: '6',
					questionType: 'binary',
					response: true,
				},
			],
		},
		{
			userId: 'PusOCJGtL6cSrAhN8oePaUybLR42',
			location: {
				city: 'Londrina',
				country: 'Brasil',
				district: 'Palhano 2',
				geohashNearby: [Array],
				number: '50',
				postalCode: '86055-650',
				state: 'Paraná',
				street: 'Rua Guilherme Farel',
			},
			responses: [
				{
					questionId: '1',
					questionType: 'textual',
					response: 'Pato',
				},

				{
					questionId: '2',
					questionType: 'numerical',
					response: 20,
				},
				{
					questionId: '2',
					questionType: 'numerical',
					response: 30,
				},
				{
					questionId: '2',
					questionType: 'numerical',
					response: 30,
				},
				{
					questionId: '2',
					questionType: 'numerical',
					response: 30,
				},

				{
					questionId: '3',
					questionType: 'satisfaction',
					response: 1,
				},

				{
					questionId: '4',
					questionType: 'satisfaction',
					response: 4,
				},
				{
					questionId: '4',
					questionType: 'satisfaction',
					response: 3,
				},
				{
					questionId: '4',
					questionType: 'satisfaction',
					response: 1,
				},
				{
					questionId: '4',
					questionType: 'satisfaction',
					response: 2,
				},
				{
					questionId: '4',
					questionType: 'satisfaction',
					response: 5,
				},
				{
					questionId: '4',
					questionType: 'satisfaction',
					response: 5,
				},

				{
					questionId: '5',
					questionType: 'binary',
					response: false,
				},
				{
					questionId: '6',
					questionType: 'binary',
					response: true,
				},
			],
		}
	]
}

const groupQuestionsByQuestionType = (questionType) => {
	const allResponses = pollData.privateResponses.map((poll) => poll.responses)
	const listOfResponses = [].concat(...allResponses)

	const groupedByQuestionId = listOfResponses.reduce((total, response) => {
		const { questionId, ...rest } = response
		total[questionId] = total[questionId] || []
		total[questionId].push(rest)
		return total
	}, {})

	const allResponsesByQuestion = pollData.questions.reduce((total, poll) => {
		if (poll.questionType !== questionType) return total
		return (
			[
				...total,
				{
					...poll,
					responses: groupedByQuestionId[poll.questionId]
				}
			]
		)
	}, [])

	return allResponsesByQuestion
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
	const numberOfResponses = ` ${pollData.privateResponses.length}`

	return (
		<>
			<h2 className={'poll-title'}>{'Enquete - Nova praça pública dos imigrantes'}</h2>
			<p className={'poll-description'}>
				{'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem voluptates'}
				{'quaerat consectetur eaque optio. Laborum distinctio debitis impedit et doloremque ratione eius! Ea, amet!'}
				{'Commodi recusandae officiis obcaecati magnam?'}
			</p>
			<p className={'responses-number'}>
				{'Total de respostas:'}
				<b>{numberOfResponses}</b>
			</p>
		</>
	)
}

const renderBinaryGraph = () => {
	const allResponsesByQuestion = groupQuestionsByQuestionType('binary')
	const binaryLabels = ['Sim','Não']

	return allResponsesByQuestion.map((questionWithResponses, index) => {
		const binaryValues = binaryLabels.map((label, index) => {
			const responses = questionWithResponses.responses.filter((response) => {
				const responseLabel = response.response ? 'Sim' : 'Não'
				return responseLabel === label
			})
			const percentage = (responses.length / questionWithResponses.responses.length) * 100
			return [label, responses.length, percentage.toFixed(2) + '%']
		})

		const getBinaryValueStyle = (value) => {
			if (value === 'Sim') return ' green3'
			return ' red3'
		}

		return (
			<div className="card" key={index}>
				<div className="card-content">
					<h3 className="card-title">{questionWithResponses.question}</h3>
					{
						binaryValues.map((binaryValue, index, values) => {
							const isLastItem = index === values.length - 1
							return (
								<div className="bar" key={index}>
									<div className="bar-label">{binaryValue[0]}</div>
									<div className={"bar-base" + (index === 0 ? " bar-base-first" : "") + (isLastItem ? " bar-base-last" : "")}></div>
									<div className="bar-progress">
										<div className={"bar-progress-inner" + getBinaryValueStyle(binaryValue[0])} style={{ width: binaryValue[2] }}></div>
									</div>
									<div className="bar-progress-text">{binaryValue[1]}</div>
									<div className="bar-progress-text">{binaryValue[2]}</div>
								</div>
							)
						})
					}
				</div>
			</div >
		)
	})
}

const renderNumericalGraph = () => {
	const allResponsesByQuestion = groupQuestionsByQuestionType('numeric')

	return allResponsesByQuestion.map((questionWithResponses, index) => {
		const ordenedResponses = questionWithResponses.responses.sort((a, b) => a.response - b.response)

		const numericalValues = ordenedResponses.reduce((acc, label, index) => {
			const responses = questionWithResponses.responses.filter((response) => response.response === label.response)
			const percentage = (responses.length / questionWithResponses.responses.length) * 100

			if(acc.find((item) => item[0] === label.response)){
				return [...acc]
			}
			
			return [...acc, [label.response, responses.length, percentage.toFixed(2) + '%']]
		}, [])

		return (
			<div className="card" key={index}>
				<div className="card-content">
					<h3 className="card-title">{questionWithResponses.question}</h3>
					{
						numericalValues.map((satisfaction, index, values) => {
							const isLastItem = index === values.length - 1

							return (
								<div className="bar" key={index}>
									<div className="bar-label">{satisfaction[0]}</div>
									<div className={"bar-base" + (index === 0 ? " bar-base-first" : "") + (isLastItem ? " bar-base-last" : "")}></div>
									<div className="bar-progress">
										<div className={"bar-progress-inner orange3"} style={{ width: satisfaction[2] }}></div>
									</div>
									<div className="bar-progress-text">{satisfaction[1]}</div>
									<div className="bar-progress-text">{satisfaction[2]}</div>
								</div>
							)
						})
					}
				</div>
			</div >
		)
	})
}

const renderSatisfactionGraph = () => {
	const getSatisfactionBarColor = (value) => {
		console.log(value)
		
		if (value === 'Muito satisfeito') return ' green3'
		if (value === 'Satisfeito') return ' green1'
		if (value === 'Mais ou menos') return ' yellow3'
		if (value === 'Insatisfeito') return ' red1'
		if (value === 'Muito insatisfeito') return ' red3'
		return ' orange3'
	}
	
	const allResponsesByQuestion = groupQuestionsByQuestionType('satisfaction')
	const satisfactionLabels = ['Muito satisfeito','Satisfeito','Mais ou menos','Insatisfeito','Muito insatisfeito']

	return allResponsesByQuestion.map((questionWithResponses, index) => {
		const satisfactionValues = satisfactionLabels.map((label, index) => {
			const responses = questionWithResponses.responses.filter((response) => response.response === (index + 1))
			const percentage = (responses.length / questionWithResponses.responses.length) * 100
			return [label, responses.length, percentage.toFixed(2) + '%']
		})

		return (
			<div className="card" key={index}>
				<div className="card-content">
					<h3 className="card-title">{questionWithResponses.question}</h3>
					{
						satisfactionValues.map((satisfaction, index) => (
							<div className="bar" key={index}>
								<div className="bar-label">{satisfaction[0]}</div>
								<div className={"bar-base" + (index === 0 ? " bar-base-first" : "") + (index === 4 ? " bar-base-last" : "")}></div>
								<div className="bar-progress">
									<div className={"bar-progress-inner" + getSatisfactionBarColor(satisfaction[0])} style={{ width: satisfaction[2] }}></div>
								</div>
								<div className="bar-progress-text">{satisfaction[1]}</div>
								<div className="bar-progress-text">{satisfaction[2]}</div>
							</div>
						))
					}
				</div>
			</div >
		)
	})
}

const renderTextualResponses = () => {
	const allResponsesByQuestion = groupQuestionsByQuestionType('textual')

	return allResponsesByQuestion.map((poll,index) => {
		return (
			<div className="card" key={index}>
				<div className="card-content">
					<h3 className="card-title">{poll.question}</h3>
					{
						poll.responses.map((response, index, responses) => {
							const isLastItem = index === responses.length - 1
							return (
								<div className={"long-text-container" + (isLastItem ? " last-item" : "")} key={index}>
									<ul>
										<li className="long-text">{response.response}</li>
									</ul>
								</div>
							)
						})
					}
				</div>
			</div>
		)
	})
}

const renderIndividualResponses = ()=> {
	return <></>
}

const renderFooter = () => (
	<>
		<h4 className="author">Formulário criado utilizando o aplicativo corre.social</h4>
		{/* <svg width="138" height="36" viewBox="0 0 138 36" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="evenodd" clip-rule="evenodd"
				d="M137.235 26.8056C137.235 29.2392 136.259 31.5741 134.526 33.2945C132.785 35.0156 130.431 35.9823 127.975 35.9823H118.711C117.373 35.9823 116.062 35.695 114.864 35.1528C113.155 35.6909 111.333 35.9823 109.444 35.9823H100.181C97.7529 35.9823 95.4418 35.5023 93.3313 34.635C92.3548 35.4746 91.0795 35.9823 89.6875 35.9823H55.7241C55.1891 35.9823 54.6726 35.9079 54.184 35.768C53.2758 35.9086 52.3451 35.9823 51.3973 35.9823H42.135C39.6117 35.9823 37.2105 35.4631 35.0331 34.5302C32.8543 35.4631 30.4538 35.9823 27.9318 35.9823H18.6689C8.78776 35.9823 0.764648 28.0332 0.764648 18.2408C0.764648 8.44902 8.78776 0.5 18.6689 0.5H27.9318C30.4538 0.5 32.8543 1.01781 35.0331 1.95271C37.2105 1.01781 39.6117 0.5 42.135 0.5H51.3973C52.9128 0.5 54.3846 0.68725 55.7903 1.03944C56.5183 0.693334 57.3331 0.5 58.1942 0.5H95.8574C96.393 0.5 96.9075 0.574359 97.3974 0.713614C98.3029 0.573007 99.233 0.5 100.181 0.5H109.444C119.117 0.5 127.009 8.11845 127.338 17.627H127.975C130.431 17.627 132.785 18.5937 134.526 20.3141C136.259 22.0351 137.235 24.3687 137.235 26.8023V26.8056C137.235 28.8329 137.235 28.8309 137.235 26.8056Z"
				fill="black" />
			<path fill-rule="evenodd" clip-rule="evenodd"
				d="M118.472 23.0113C117.476 23.0113 116.519 23.4062 115.817 24.1092C115.113 24.8129 114.717 25.767 114.717 26.7625V26.7653C114.717 27.7608 115.113 28.7149 115.817 29.4179C116.519 30.1216 117.476 30.5172 118.472 30.5172C119.467 30.5172 120.42 30.1216 121.126 29.4179C121.83 28.7149 122.223 27.7608 122.223 26.7653V26.7612C122.223 25.767 121.83 24.8129 121.126 24.1092C120.42 23.4062 119.467 23.0113 118.472 23.0113ZM42.0067 5.95215C35.2268 5.95215 29.7232 11.4562 29.7232 18.2347C29.7232 25.0131 35.2268 30.5172 42.0067 30.5172C48.7852 30.5172 54.2881 25.0131 54.2881 18.2347C54.2881 11.4562 48.7852 5.95215 42.0067 5.95215ZM61.7375 26.8311H64.2405V30.5172H55.4813V26.8311H57.9842V5.95215H61.7375V9.46454C63.995 7.29237 67.0863 5.95215 70.4933 5.95215V9.63826C65.6607 9.63826 61.7375 13.49 61.7375 18.2347V26.8311ZM77.7805 9.46454C80.038 7.29237 83.1272 5.95215 86.5363 5.95215V9.63826C81.7036 9.63826 77.7805 13.49 77.7805 18.2347V26.8311H80.2827V30.5172H71.5249V26.8311H74.0271V5.95215H77.7805V9.46454ZM28.4257 25.6042C26.1737 28.5859 22.5908 30.5172 18.5593 30.5172C11.7501 30.5172 6.22266 25.0131 6.22266 18.2347C6.22266 11.4562 11.7501 5.95215 18.5593 5.95215C22.5908 5.95215 26.1737 7.88139 28.4257 10.8638L25.464 13.076C23.8883 10.9893 21.3806 9.63826 18.5593 9.63826C13.7935 9.63826 9.92488 13.49 9.92488 18.2347C9.92488 22.9794 13.7935 26.8311 18.5593 26.8311C21.3806 26.8311 23.8883 25.48 25.464 23.3933L28.4257 25.6042ZM91.6117 20.0771C92.4523 23.9369 95.8948 26.8311 100.006 26.8311C102.818 26.8311 105.313 25.4786 106.883 23.3906L109.832 25.6028C107.588 28.5859 104.023 30.5172 100.006 30.5172C93.2269 30.5172 87.724 25.0131 87.724 18.2347C87.724 11.4562 93.2269 5.95215 100.006 5.95215C106.785 5.95215 112.289 11.4562 112.289 18.2347H112.282L112.289 18.2381V20.0771H91.6117ZM42.0067 9.63826C46.7507 9.63826 50.6022 13.49 50.6022 18.2347C50.6022 22.9794 46.7507 26.8311 42.0067 26.8311C37.2613 26.8311 33.4091 22.9794 33.4091 18.2347C33.4091 13.49 37.2613 9.63826 42.0067 9.63826ZM108.405 16.3909H91.6117C92.4523 12.5318 95.8948 9.63826 100.006 9.63826C104.118 9.63826 107.561 12.5318 108.405 16.3909Z"
				fill="white" />
		</svg> */}
	</>
)

function App() {
	// Deve ser "html" o container
	return (
		<div /* lang={'pt-br'} */>
			{renderHtmlHeader()}
			<div className='body'>
				{/* {renderPollHeader()}
				{renderBinaryGraph()}
				{renderNumericalGraph()}
				{renderSatisfactionGraph()}
				{renderTextualResponses()}
				{renderFooter()} */}
				{renderIndividualResponses()}
			</div>
		</div>
	)
}

export default App

/* 

<html lang="pt-br">

<body>
	<div className="card">
		<div className="card-content">
			<h3 className="card-title">Gráfico de Barras Horizontais 2</h3>
			<div className="long-text-container">
				<ul>
					<li className="long-text">
						Lorem ipsum dolor sit amet consectetur. Vel donec tellus aliquam erat lacus amet
						pellentesque. Hac sem luctus arcu pretium lectus pellentesque. Aliquet tellus tincidunt
						consequat faucibus dignissim ultricies magna commodo penatibus. Aliquam egestas sit.
					</li>
				</ul>
			</div>

			<h3 className="card-title">Gráfico de Barras Horizontais 3</h3>
			<div className="other-text-container">
				31
			</div>

			<h3 className="card-title">Gráfico de Barras Horizontais 3</h3>
			<div className="other-text-container">
				Sim
			</div>

			<h3 className="card-title">Gráfico de Barras Horizontais 3</h3>
			<div className="other-text-container last-item">
				<svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M14.25 22.5C14.3755 22.5 14.5005 22.4979 14.625 22.4939C14.7495 22.4979 14.8745 22.5 15 22.5C21.2132 22.5 26.2499 17.4632 26.2499 11.25C26.2499 5.0368 21.2132 0 15 0C14.8745 0 14.7495 0.00205469 14.625 0.00613228C14.5005 0.00205469 14.3755 0 14.25 0C14.1245 0 13.9995 0.00205469 13.875 0.00613228C13.7505 0.0020547 13.6255 0 13.5 0C13.3745 0 13.2495 0.00205467 13.125 0.00613225C13.0005 0.00205468 12.8755 0 12.75 0C12.6245 0 12.4995 0.0020547 12.375 0.00613229C12.2505 0.0020547 12.1255 0 12 0C11.8745 0 11.7495 0.00205469 11.625 0.00613227C11.5005 0.00205469 11.3755 0 11.25 0C5.03678 0 0 5.0368 0 11.25C0 17.4632 5.03678 22.5 11.25 22.5C11.3755 22.5 11.5005 22.4979 11.625 22.4939C11.7495 22.4979 11.8745 22.5 12 22.5C12.1255 22.5 12.2505 22.4979 12.375 22.4939C12.4995 22.4979 12.6245 22.5 12.75 22.5C12.8755 22.5 13.0005 22.4979 13.125 22.4939C13.2495 22.4979 13.3745 22.5 13.5 22.5C13.6255 22.5 13.7505 22.4979 13.875 22.4939C13.9995 22.4979 14.1245 22.5 14.25 22.5Z"
						fill="black" />
					<path fill-rule="evenodd" clip-rule="evenodd"
						d="M11.25 21C16.6347 21 21 16.6348 21 11.25C21 5.86522 16.6347 1.5 11.25 1.5C5.86521 1.5 1.5 5.86522 1.5 11.25C1.5 16.6348 5.86521 21 11.25 21ZM8.43766 9.75C8.95543 9.75 9.37516 9.33027 9.37516 8.8125C9.37516 8.29473 8.95543 7.875 8.43766 7.875C7.9199 7.875 7.50017 8.29473 7.50017 8.8125C7.50017 9.33027 7.9199 9.75 8.43766 9.75ZM15.7541 13.1156C15.8711 12.8331 15.961 12.5409 16.0229 12.243C16.1354 11.7023 15.6774 11.25 15.1251 11.25H7.37517C6.82288 11.25 6.36488 11.7023 6.47738 12.243C6.53936 12.5409 6.62925 12.8331 6.74626 13.1156C6.99125 13.707 7.35034 14.2445 7.80302 14.6971C8.2557 15.1498 8.79312 15.5089 9.38458 15.7539C9.97604 15.9989 10.61 16.125 11.2502 16.125C11.8904 16.125 12.5243 15.9989 13.1157 15.7539C13.7072 15.5089 14.2446 15.1498 14.6973 14.6971C15.15 14.2445 15.5091 13.707 15.7541 13.1156ZM15.0001 8.8125C15.0001 9.33027 14.5804 9.75 14.0627 9.75C13.5449 9.75 13.1252 9.33027 13.1252 8.8125C13.1252 8.29473 13.5449 7.875 14.0627 7.875C14.5804 7.875 15.0001 8.29473 15.0001 8.8125Z"
						fill="white" />
				</svg>
			</div>
		</div>
	</div>
	<br />
</body>

</html>


*/

/* 


*/