import {
	FaMapMarkerAlt,
	FaRegFilePdf,
} from 'react-icons/fa'

import { BsFillTelephoneFill } from 'react-icons/bs'
import CopyLinkButton from '@/components/buttons/CopyLinkButton'
import { HiMail } from 'react-icons/hi'
import { State } from '@/redux/store/store'
import { isValidURL } from '@/utils/general'
import { useSelector } from 'react-redux'
import { UseGetPostulationById } from '@/hooks/useGetPostulationById'

interface Props {
	postulationId: string
}

const General = ({ postulationId }: Props) => {
	const details = useSelector(
		(state: State) => state.info.detail,
	)
	const cv = useSelector(
		(state: State) => state.info.detail.cv,
	)
	const { postulation } = UseGetPostulationById(
		details,
		postulationId,
	)

	const url_link_2 = postulation && postulation.url_link_2!
	const portfolioLink = postulation && postulation.portfolio
	const linkedinLink = postulation && postulation.linkedin
	const working_reason =
		postulation && postulation.working_reason
	const salary_expectations =
		postulation && postulation.salary_expectations
	const english_level = details && details.english_level

	const birthYear = details.birth_date?.split('-')[0]
	const age = new Date().getFullYear() - birthYear

	const renderLink = (link: string) =>
		link && isValidURL(link) ? link : null

	return (
		<div className="grid justify-items-center">
			<section className="grid justify-items-center grid-cols-2 gap-[10px] w-[85%]">
				{/* FIRST GRID */}
				<div className="my-[48px] font-raleway text-gray-color text-[12px] w-full">
					{/*  */}
					<div className="my-[12px]">
						<h2 className="font-semibold text-[20px] text-cyan-color">
							{details.name}
						</h2>
						<p>
							{details.academic_training
								? details.academic_training
								: 'N/A'}
						</p>
						<div className="my-[10px]">
							<p>
								Date of birth: &nbsp;
								<span className="font-medium">
									{details.birth_date
										? details.birth_date
										: 'N/A'}
								</span>
							</p>
							<p>
								Age: &nbsp;
								<span className="font-medium">
									{age ? age : 'N/A'}
								</span>
							</p>
						</div>
						<p className="flex gap-[10px] items-center">
							<FaMapMarkerAlt className="text-cyan-color w-[14px] h-[16px]" />
							<span>{details.country}</span>
						</p>
					</div>

					<hr className="text-light-color w-[277px] my-[20px]" />

					<div>
						<h6 className="font-semibold text-[15px]">
							Contact details
						</h6>
						<div>
							<p className="flex gap-[10px] items-center">
								<HiMail className="text-cyan-color w-[14px] h-[16px]" />
								<span>{details.email}</span>
							</p>
							<p className="flex gap-[10px] items-center">
								<BsFillTelephoneFill className="text-cyan-color w-[14px] h-[16px]" />
								<span>{details.phone}</span>
							</p>
						</div>
					</div>

					<hr className="text-light-color w-[277px] my-[20px]" />

					<div>
						<h6 className="text-[15px] font-semibold">
							English level:
						</h6>
						<div>
							<p>{details.english_level}</p>
						</div>
					</div>

					<hr className="text-light-color w-[277px] my-[20px]" />

					<div>
						<p className="font-normal flex items-center my-5">
							<FaRegFilePdf className="text-cyan-color w-[20px] h-[26px]" />{' '}
							&nbsp;
							<span className="text-cyan-color text-lg ml-3 font-medium">
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={cv}
								>
									CV
								</a>
							</span>
						</p>
						<p className="font-normal my-[10px]">
							Linkedin: &nbsp;
							<span className="text-cyan-color">
								{linkedinLink ? (
									<a
										target="_blank"
										rel="noopener noreferrer"
										href={renderLink(linkedinLink!)!}
									>
										{renderLink(linkedinLink!)}
									</a>
								) : (
									'N/A'
								)}
							</span>
						</p>
						<p className="font-normal my-2">
							Other Links: &nbsp;
							<span className="text-cyan-color">
								{portfolioLink ? (
									<a
										target="_blank"
										rel="noopener noreferrer"
										href={renderLink(portfolioLink!)!}
									>
										{renderLink(portfolioLink!)}
									</a>
								) : (
									'N/A'
								)}
							</span>
						</p>
						<p className="font-normal">
							Link 2 URL: &nbsp;
							<span className="text-cyan-color">
								{url_link_2 ? (
									<CopyLinkButton
										linkTo={url_link_2}
										className="bg-[#00ADEF] text-white w-fit px-2 rounded-md ml-2"
									/>
								) : (
									'N/A'
								)}
							</span>
						</p>
					</div>
				</div>
				{/* SECOND GRID */}
				<div
					className={`w-full my-[48px] font-raleway text-[12px] ${
						details.main_status === 'interested'
							? 'text-[#B3B9C0]'
							: 'text-gray-color'
					}`}
				>
					<div className="my-[12px]">
						<span>
							Why are you interesting in working with FTF
						</span>
						<textarea
							name="description"
							id="description"
							value={working_reason ?? 'N/A'}
							className="resize-none bg-light-color/100 border-light-color border focus:bg-white focus:outline-none focus:border-cyan-color rounded-[10px] max-w-full w-[350px] h-[121px] py-3 px-4 leading-tight font-raleway my-3"
							maxLength={280}
							readOnly
						/>
					</div>
					<div className="my-5 flex flex-row">
						<p>
							Salary Expectations:{' '}
							<span className="font-bold">
								{salary_expectations ?? 'N/A'}
							</span>{' '}
						</p>
						<p className="ml-[45px]">
							Available from:{' '}
							<span className="font-bold">
								{details.available_from
									? details.available_from
									: 'N/A'}
							</span>
						</p>
					</div>
					<hr className="text-light-color w-[349.44px]" />
					<div className="my-5">
						<p>
							English Evaluation:{' '}
							<span className="bg-light-color w-[43px] h-[28px] rounded-[5px] px-3 py-1">
								{english_level ?? 'N/A'}
							</span>
						</p>
					</div>
					<hr className="text-light-color w-[349.44px]" />
					<div className="my-5 flex h-20">
						<span className="py-1">Tech Skills: </span>
						<div className="flex w-[19rem] pt-1 overflow-y-auto flex-wrap gap-y-3">
							{postulation.skills ? (
								postulation.skills.map(
									(skill: string, index: number) => (
										<div key={index} className="ml-2">
											<span className="text-white font-medium bg-cyan-color rounded-full p-1 px-2">
												{skill}
											</span>
										</div>
									),
								)
							) : (
								<span className="font-medium rounded-full ml-2">
									N/A
								</span>
							)}
						</div>
					</div>
					<hr className="text-light-color w-[349.44px]" />
					<div className="my-5">
						<span>Interview Skills:</span>
					</div>
					<hr className="text-light-color w-[349.44px]" />
				</div>
			</section>
		</div>
	)
}

export default General
