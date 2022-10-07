import { IPostulation } from '../redux/candidates/types/data'

export function UseGetPostulationById(
	detail: any,
	postulationId: string,
) {
	const postulation = {} as IPostulation
	const found: IPostulation =
		detail.postulations.length &&
		detail.postulations.find((p: IPostulation) => {
			return p._id === postulationId
		})
	if (found) Object.assign(postulation, found)

	return { postulation }
}
