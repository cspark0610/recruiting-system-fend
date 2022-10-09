import { IPosition } from '../../redux/positions/types/data'

interface headerVideoQuestions {
	position: IPosition
	questionarySelected: questionary | null
}

interface listQuestionaries {
	questionaries: questionary[]
}
interface itemQuestionary {
	questionary: questionary
}
