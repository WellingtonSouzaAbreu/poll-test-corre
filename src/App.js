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
			questionType: 'numerical'
		},
		{
			questionId: '3',
			question: 'O que você achou da morte do homem de ferro?',
			questionType: 'satisfaction'
		},
		{
			questionId: '4',
			question: 'Está satisfeito com o substituto do capitão américa?',
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
					response: 55,
				},

				{
					questionId: '3',
					questionType: 'satisfaction',
					response: 1,
				},
				{
					questionId: '3',
					questionType: 'satisfaction',
					response: 4,
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
					response: 4,
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

const groupQuestionsResponsesByUser = (questionType) => {
	const groupedByUser = pollData.privateResponses.map((pollResponse) => {
		const responsesWithQuestion = pollResponse.responses.map((response) => {
			const { questionId, ...rest } = response
			const questionText = pollData.questions.find((question) => question.questionId === questionId)
			return {
				question: questionText.question,
				...rest
			}
		})
		
		return responsesWithQuestion
	})

	return groupedByUser
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
	const poll = {
		createdAt: new Date(),
		range: 'city',
		owner: {
			userId: '1',
			name: 'José Alencar',
			profilePictureUrl: []
		},
		location: {
			city: 'Londrina',
			district: 'Centro',
			state: 'Paraná'
		}
	}
	
	return (
		<>
			<h2 className={'poll-title'}>{'Enquete - Nova praça pública dos imigrantes'}</h2>
			<p className={'poll-description'}>
				{'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem voluptates'}
				{'quaerat consectetur eaque optio. Laborum distinctio debitis impedit et doloremque ratione eius! Ea, amet!'}
				{'Commodi recusandae officiis obcaecati magnam?'}
			</p>
			<p className='poll-info'>{'Autor: '}<b>{poll.owner.name}</b></p>
			<p className='poll-info'>{'Local da enquete: '} <b>Bairro {poll.location.district}, {poll.location.city} - {poll.location.state}</b></p>
			<p className='poll-info'>{'Alcance: '}<b>Cidade</b></p>
			<p className='poll-info'>{'Data e publicação: '}<b>{poll.createdAt.toLocaleDateString()}</b></p>
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
	const allResponsesByQuestion = groupQuestionsByQuestionType('numerical')

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
	const allResponsesByQuestion = groupQuestionsByQuestionType('satisfaction')
	const satisfactionLabels = ['Muito satisfeito','Satisfeito','Mais ou menos','Insatisfeito','Muito insatisfeito']

	return allResponsesByQuestion.map((questionWithResponses, index) => {
		const satisfactionValues = satisfactionLabels.map((label) => {
			const responses = questionWithResponses.responses.filter((response) => getSatisfactionLabel(response.response) === label)
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
								<div className="bar-label bar-label-spaced">
									{satisfaction[0]}
									{renderSatisfactionIcon(satisfaction[0])}
								</div>
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

const getSatisfactionBarColor = (satisactionLabel) => {
	if (satisactionLabel === 'Muito satisfeito') return ' green3'
	if (satisactionLabel === 'Satisfeito') return ' green1'
	if (satisactionLabel === 'Mais ou menos') return ' yellow3'
	if (satisactionLabel === 'Insatisfeito') return ' red1'
	if (satisactionLabel === 'Muito insatisfeito') return ' red3'
	return ' orange3'
}

const getSatisfactionLabel = (satisfactionValue) => {
	if (satisfactionValue === 1) return 'Muito insatisfeito'
	if (satisfactionValue === 2) return 'Insatisfeito'
	if (satisfactionValue === 3) return 'Mais ou menos'
	if (satisfactionValue === 4) return 'Satisfeito'
	if (satisfactionValue === 5) return 'Muito satisfeito'
	return 'Não avaliado'
}

const renderSatisfactionIcon = (satisactionLabel) => {
	if (satisactionLabel === 'Muito satisfeito') return (
		<svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M14.25 22.5C14.3755 22.5 14.5005 22.4979 14.625 22.4939C14.7495 22.4979 14.8745 22.5 15 22.5C21.2132 22.5 26.2499 17.4632 26.2499 11.25C26.2499 5.0368 21.2132 0 15 0C14.8745 0 14.7495 0.00205469 14.625 0.00613228C14.5005 0.00205469 14.3755 0 14.25 0C14.1245 0 13.9995 0.00205469 13.875 0.00613228C13.7505 0.0020547 13.6255 0 13.5 0C13.3745 0 13.2495 0.00205467 13.125 0.00613225C13.0005 0.00205468 12.8755 0 12.75 0C12.6245 0 12.4995 0.0020547 12.375 0.00613229C12.2505 0.0020547 12.1255 0 12 0C11.8745 0 11.7495 0.00205469 11.625 0.00613227C11.5005 0.00205469 11.3755 0 11.25 0C5.03678 0 0 5.0368 0 11.25C0 17.4632 5.03678 22.5 11.25 22.5C11.3755 22.5 11.5005 22.4979 11.625 22.4939C11.7495 22.4979 11.8745 22.5 12 22.5C12.1255 22.5 12.2505 22.4979 12.375 22.4939C12.4995 22.4979 12.6245 22.5 12.75 22.5C12.8755 22.5 13.0005 22.4979 13.125 22.4939C13.2495 22.4979 13.3745 22.5 13.5 22.5C13.6255 22.5 13.7505 22.4979 13.875 22.4939C13.9995 22.4979 14.1245 22.5 14.25 22.5Z" fill="black"/>
			<path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 21C16.6347 21 21 16.6348 21 11.25C21 5.86522 16.6347 1.5 11.25 1.5C5.86521 1.5 1.5 5.86522 1.5 11.25C1.5 16.6348 5.86521 21 11.25 21ZM8.43766 9.75C8.95543 9.75 9.37516 9.33027 9.37516 8.8125C9.37516 8.29473 8.95543 7.875 8.43766 7.875C7.9199 7.875 7.50017 8.29473 7.50017 8.8125C7.50017 9.33027 7.9199 9.75 8.43766 9.75ZM15.7541 13.1156C15.8711 12.8331 15.961 12.5409 16.0229 12.243C16.1354 11.7023 15.6774 11.25 15.1251 11.25H7.37517C6.82288 11.25 6.36488 11.7023 6.47738 12.243C6.53936 12.5409 6.62925 12.8331 6.74626 13.1156C6.99125 13.707 7.35034 14.2445 7.80302 14.6971C8.2557 15.1498 8.79312 15.5089 9.38458 15.7539C9.97604 15.9989 10.61 16.125 11.2502 16.125C11.8904 16.125 12.5243 15.9989 13.1157 15.7539C13.7072 15.5089 14.2446 15.1498 14.6973 14.6971C15.15 14.2445 15.5091 13.707 15.7541 13.1156ZM15.0001 8.8125C15.0001 9.33027 14.5804 9.75 14.0627 9.75C13.5449 9.75 13.1252 9.33027 13.1252 8.8125C13.1252 8.29473 13.5449 7.875 14.0627 7.875C14.5804 7.875 15.0001 8.29473 15.0001 8.8125Z" fill="white"/>
		</svg>
	)
	if (satisactionLabel === 'Satisfeito') return (
		<svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M14.25 22.875C14.3755 22.875 14.5005 22.8729 14.625 22.8689C14.7495 22.8729 14.8745 22.875 15 22.875C21.2132 22.875 26.2499 17.8382 26.2499 11.625C26.2499 5.4118 21.2132 0.375 15 0.375C14.8745 0.375 14.7495 0.377055 14.625 0.381132C14.5005 0.377055 14.3755 0.375 14.25 0.375C14.1245 0.375 13.9995 0.377055 13.875 0.381132C13.7505 0.377055 13.6255 0.375 13.5 0.375C13.3745 0.375 13.2495 0.377055 13.125 0.381132C13.0005 0.377055 12.8755 0.375 12.75 0.375C12.6245 0.375 12.4995 0.377055 12.375 0.381132C12.2505 0.377055 12.1255 0.375 12 0.375C11.8745 0.375 11.7495 0.377055 11.625 0.381132C11.5005 0.377055 11.3755 0.375 11.25 0.375C5.03678 0.375 0 5.4118 0 11.625C0 17.8382 5.03678 22.875 11.25 22.875C11.3755 22.875 11.5005 22.8729 11.625 22.8689C11.7495 22.8729 11.8745 22.875 12 22.875C12.1255 22.875 12.2505 22.8729 12.375 22.8689C12.4995 22.8729 12.6245 22.875 12.75 22.875C12.8755 22.875 13.0005 22.8729 13.125 22.8689C13.2495 22.8729 13.3745 22.875 13.5 22.875C13.6255 22.875 13.7505 22.8729 13.875 22.8689C13.9995 22.8729 14.1245 22.875 14.25 22.875Z" fill="black"/>
			<path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 21.375C16.6347 21.375 20.9999 17.0098 20.9999 11.625C20.9999 6.24022 16.6347 1.875 11.25 1.875C5.86521 1.875 1.5 6.24022 1.5 11.625C1.5 17.0098 5.86521 21.375 11.25 21.375ZM8.43767 10.125C8.95543 10.125 9.37516 9.70527 9.37516 9.1875C9.37516 8.66973 8.95543 8.25 8.43767 8.25C7.9199 8.25 7.50017 8.66973 7.50017 9.1875C7.50017 9.70527 7.9199 10.125 8.43767 10.125ZM11.2502 16.5C12.2913 16.5 13.2982 16.1669 14.1282 15.5598C14.4626 15.3152 14.4598 14.8347 14.1669 14.5417C13.8739 14.2488 13.402 14.2575 13.0516 14.4787C12.5166 14.8164 11.8929 14.9997 11.2502 14.9997C10.6075 14.9997 9.98367 14.8164 9.4487 14.4787C9.09836 14.2575 8.62641 14.2488 8.33346 14.5417C8.04051 14.8347 8.03772 15.3152 8.37211 15.5598C9.20216 16.1669 10.209 16.5 11.2502 16.5ZM15.0001 9.1875C15.0001 9.70527 14.5804 10.125 14.0627 10.125C13.5449 10.125 13.1252 9.70527 13.1252 9.1875C13.1252 8.66973 13.5449 8.25 14.0627 8.25C14.5804 8.25 15.0001 8.66973 15.0001 9.1875Z" fill="white"/>
		</svg>
	)
	if (satisactionLabel === 'Mais ou menos') return (
		<svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M14.25 23.25C14.3755 23.25 14.5005 23.2479 14.625 23.2439C14.7495 23.2479 14.8745 23.25 15 23.25C21.2132 23.25 26.2499 18.2132 26.2499 12C26.2499 5.7868 21.2132 0.75 15 0.75C14.8745 0.75 14.7495 0.752055 14.625 0.756132C14.5005 0.752055 14.3755 0.75 14.25 0.75C14.1245 0.75 13.9995 0.752055 13.875 0.756132C13.7505 0.752055 13.6255 0.75 13.5 0.75C13.3745 0.75 13.2495 0.752055 13.125 0.756132C13.0005 0.752055 12.8755 0.75 12.75 0.75C12.6245 0.75 12.4995 0.752055 12.375 0.756132C12.2505 0.752055 12.1255 0.75 12 0.75C11.8745 0.75 11.7495 0.752055 11.625 0.756132C11.5005 0.752055 11.3755 0.75 11.25 0.75C5.03678 0.75 0 5.7868 0 12C0 18.2132 5.03678 23.25 11.25 23.25C11.3755 23.25 11.5005 23.2479 11.625 23.2439C11.7495 23.2479 11.8745 23.25 12 23.25C12.1255 23.25 12.2505 23.2479 12.375 23.2439C12.4995 23.2479 12.6245 23.25 12.75 23.25C12.8755 23.25 13.0005 23.2479 13.125 23.2439C13.2495 23.2479 13.3745 23.25 13.5 23.25C13.6255 23.25 13.7505 23.2479 13.875 23.2439C13.9995 23.2479 14.1245 23.25 14.25 23.25Z" fill="black"/>
			<path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 21.75C16.6347 21.75 21 17.3848 21 12C21 6.61522 16.6347 2.25 11.25 2.25C5.86521 2.25 1.5 6.61522 1.5 12C1.5 17.3848 5.86521 21.75 11.25 21.75ZM8.4384 10.5C8.95616 10.5 9.37589 10.0803 9.37589 9.5625C9.37589 9.04473 8.95616 8.625 8.4384 8.625C7.92063 8.625 7.5009 9.04473 7.5009 9.5625C7.5009 10.0803 7.92063 10.5 8.4384 10.5ZM14.0634 10.5C14.5811 10.5 15.0009 10.0803 15.0009 9.5625C15.0009 9.04473 14.5811 8.625 14.0634 8.625C13.5456 8.625 13.1259 9.04473 13.1259 9.5625C13.1259 10.0803 13.5456 10.5 14.0634 10.5ZM6.37517 14.625C6.37517 14.2108 6.71096 13.875 7.12517 13.875H15.3751C15.7894 13.875 16.1251 14.2108 16.1251 14.625C16.1251 15.0392 15.7894 15.375 15.3751 15.375H7.12517C6.71096 15.375 6.37517 15.0392 6.37517 14.625Z" fill="white"/>
		</svg>
		
	)
	if (satisactionLabel === 'Insatisfeito') return (
		<svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M14.25 22.625C14.3755 22.625 14.5005 22.6229 14.625 22.6189C14.7495 22.6229 14.8745 22.625 15 22.625C21.2132 22.625 26.2499 17.5882 26.2499 11.375C26.2499 5.1618 21.2132 0.125 15 0.125C14.8745 0.125 14.7495 0.127055 14.625 0.131132C14.5005 0.127055 14.3755 0.125 14.25 0.125C14.1245 0.125 13.9995 0.127055 13.875 0.131132C13.7505 0.127055 13.6255 0.125 13.5 0.125C13.3745 0.125 13.2495 0.127055 13.125 0.131132C13.0005 0.127055 12.8755 0.125 12.75 0.125C12.6245 0.125 12.4995 0.127055 12.375 0.131132C12.2505 0.127055 12.1255 0.125 12 0.125C11.8745 0.125 11.7495 0.127055 11.625 0.131132C11.5005 0.127055 11.3755 0.125 11.25 0.125C5.03678 0.125 0 5.1618 0 11.375C0 17.5882 5.03678 22.625 11.25 22.625C11.3755 22.625 11.5005 22.6229 11.625 22.6189C11.7495 22.6229 11.8745 22.625 12 22.625C12.1255 22.625 12.2505 22.6229 12.375 22.6189C12.4995 22.6229 12.6245 22.625 12.75 22.625C12.8755 22.625 13.0005 22.6229 13.125 22.6189C13.2495 22.6229 13.3745 22.625 13.5 22.625C13.6255 22.625 13.7505 22.6229 13.875 22.6189C13.9995 22.6229 14.1245 22.625 14.25 22.625Z" fill="black"/>
			<path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 21.125C16.6347 21.125 21 16.7598 21 11.375C21 5.99022 16.6347 1.625 11.25 1.625C5.86521 1.625 1.5 5.99022 1.5 11.375C1.5 16.7598 5.86521 21.125 11.25 21.125ZM8.43766 10.2498C8.95543 10.2498 9.37516 9.83008 9.37516 9.31232C9.37516 8.79455 8.95543 8.37482 8.43766 8.37482C7.9199 8.37482 7.50017 8.79455 7.50017 9.31232C7.50017 9.83008 7.9199 10.2498 8.43766 10.2498ZM11.2502 11.7498C10.209 11.7498 9.20215 12.0829 8.37211 12.69C8.03772 12.9346 8.04051 13.4152 8.33346 13.7081C8.62641 14.0011 9.09836 13.9923 9.4487 13.7712C9.98367 13.4335 10.6075 13.2501 11.2502 13.2501C11.8929 13.2501 12.5166 13.4335 13.0516 13.7712C13.402 13.9923 13.8739 14.0011 14.1669 13.7081C14.4598 13.4152 14.4626 12.9346 14.1282 12.69C13.2982 12.0829 12.2913 11.7498 11.2502 11.7498ZM15.0001 9.31232C15.0001 9.83008 14.5804 10.2498 14.0627 10.2498C13.5449 10.2498 13.1252 9.83008 13.1252 9.31232C13.1252 8.79455 13.5449 8.37482 14.0627 8.37482C14.5804 8.37482 15.0001 8.79455 15.0001 9.31232Z" fill="white"/>
		</svg>
	)
	if (satisactionLabel === 'Muito insatisfeito') return (
		<svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M14.25 23C14.3755 23 14.5005 22.9979 14.625 22.9939C14.7495 22.9979 14.8745 23 15 23C21.2132 23 26.2499 17.9632 26.2499 11.75C26.2499 5.5368 21.2132 0.5 15 0.5C14.8745 0.5 14.7495 0.502055 14.625 0.506132C14.5005 0.502055 14.3755 0.5 14.25 0.5C14.1245 0.5 13.9995 0.502055 13.875 0.506132C13.7505 0.502055 13.6255 0.5 13.5 0.5C13.3745 0.5 13.2495 0.502055 13.125 0.506132C13.0005 0.502055 12.8755 0.5 12.75 0.5C12.6245 0.5 12.4995 0.502055 12.375 0.506132C12.2505 0.502055 12.1255 0.5 12 0.5C11.8745 0.5 11.7495 0.502055 11.625 0.506132C11.5005 0.502055 11.3755 0.5 11.25 0.5C5.03678 0.5 0 5.5368 0 11.75C0 17.9632 5.03678 23 11.25 23C11.3755 23 11.5005 22.9979 11.625 22.9939C11.7495 22.9979 11.8745 23 12 23C12.1255 23 12.2505 22.9979 12.375 22.9939C12.4995 22.9979 12.6245 23 12.75 23C12.8755 23 13.0005 22.9979 13.125 22.9939C13.2495 22.9979 13.3745 23 13.5 23C13.6255 23 13.7505 22.9979 13.875 22.9939C13.9995 22.9979 14.1245 23 14.25 23Z" fill="black"/>
			<path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 21.5C16.6347 21.5 21 17.1348 21 11.75C21 6.36522 16.6347 2 11.25 2C5.86521 2 1.5 6.36522 1.5 11.75C1.5 17.1348 5.86521 21.5 11.25 21.5ZM8.4384 10.25C8.95616 10.25 9.37589 9.83027 9.37589 9.3125C9.37589 8.79473 8.95616 8.375 8.4384 8.375C7.92063 8.375 7.5009 8.79473 7.5009 9.3125C7.5009 9.83027 7.92063 10.25 8.4384 10.25ZM6.74626 14.7587C6.62925 15.0412 6.53936 15.3333 6.47737 15.6313C6.36488 16.172 6.82288 16.6243 7.37517 16.6243H15.1251C15.6774 16.6243 16.1354 16.172 16.0229 15.6313C15.961 15.3333 15.8711 15.0412 15.7541 14.7587C15.5091 14.1672 15.15 13.6298 14.6973 13.1771C14.2446 12.7244 13.7072 12.3653 13.1157 12.1204C12.5243 11.8754 11.8903 11.7493 11.2502 11.7493C10.61 11.7493 9.97604 11.8754 9.38458 12.1204C8.79312 12.3653 8.2557 12.7244 7.80302 13.1771C7.35034 13.6298 6.99125 14.1672 6.74626 14.7587ZM15.0009 9.3125C15.0009 9.83027 14.5811 10.25 14.0634 10.25C13.5456 10.25 13.1259 9.83027 13.1259 9.3125C13.1259 8.79473 13.5456 8.375 14.0634 8.375C14.5811 8.375 15.0009 8.79473 15.0009 9.3125Z" fill="white"/>
		</svg>
	)
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
	const groupedQuestionsByUser = groupQuestionsResponsesByUser()
	
	const renderRelativeQuestionType = (question, questionType, response, index) => {
		switch(questionType){
			case 'textual': return (
				<div key={index}>
					<h3 className="card-title">{question}</h3>
					<div className="long-text-container">
							<ul>
								<li className="long-text">{response}</li>
							</ul>
					</div>
				</div>
			)
			
			case 'numerical': return (
				<div>
					<h3 className="card-title">{question}</h3>
					<div className="other-text-container">{response}</div>
				</div>
			)

			case 'binary': return (
				<div>
					<h3 className="card-title">{question}</h3>
					<div className="other-text-container">{response ? 'Sim' : 'Não'}</div>
				</div>
			)

			case 'satisfaction': return (
				<div>
					<h3 className="card-title">{question}</h3>
						<div className="other-text-container">
							{getSatisfactionLabel(response)}
						</div>
					</div>
			)
		}
	}
	
	return groupedQuestionsByUser.map((userResponses, index) => {
		console.log(userResponses)
		return (
			<div className="card" key={index}>
				<div className="card-content">
					{
						userResponses.map((questionResponse, index) => {
							return renderRelativeQuestionType(questionResponse.question,questionResponse.questionType, questionResponse.response, index)
						})
					}
				</div>
			</div>
		)
	})
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

function App() {
	// Deve ser "html" o container
	return (
		<div /* lang={'pt-br'} */>
			{renderHtmlHeader()}
			<div className='body'>
				{renderPollHeader()}
				{renderBinaryGraph()}
				{renderNumericalGraph()}
				{renderSatisfactionGraph()}
				{renderTextualResponses()}
				{renderIndividualResponses()}
				{renderFooter()}
			</div>
		</div>
	)
}

export default App