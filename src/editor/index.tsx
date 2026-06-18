import { registerPlugin } from '@wordpress/plugins';
import { useSelect } from '@wordpress/data';
// @ts-ignore
import { store as coreStore } from '@wordpress/core-data';
// @ts-ignore
import {
	store as editorStore,
	PluginDocumentSettingPanel,
} from '@wordpress/editor';
import type { WP_Taxonomy_Name as WPTaxonomyName } from 'wp-types';
import { DatetimeControl } from './components/DatetimeControl';
import { __ } from '@wordpress/i18n';

interface Term {
	id: number;
	name: string;
	slug: string;
	term_group: number;
	term_taxonomy_id: number;
	taxonomy: WPTaxonomyName | string;
	description: string;
	parent: number;
	count: number;
}

interface Taxonomy {
	slug: string;
	name: string;
	description: string;
}

interface Props {
	currentPostType: string;
	taxonomies: Taxonomy[];
	terms: Record< string, Term[] >;
}

const ControlUI = ( { taxonomies, terms, currentPostType }: Props ) => {
	return (
		<div>
			{ taxonomies?.map( ( taxonomy ) => (
				<div key={ taxonomy.slug }>
					{ terms[ taxonomy.slug ] &&
						terms[ taxonomy.slug ].length > 0 &&
						terms[ taxonomy.slug ]?.map( ( term ) => (
							<div key={ term.id }>
								<h4>
									{ taxonomy.name }: { term.name }
								</h4>
								<DatetimeControl
									label={ __( 'Attach', 'schedule-terms' ) }
									term={ term.slug }
									taxonomy={ taxonomy.slug }
									type="attach"
									postType={ currentPostType }
								/>
								<DatetimeControl
									label={ __( 'Detach', 'schedule-terms' ) }
									term={ term.slug }
									taxonomy={ taxonomy.slug }
									type="detach"
									postType={ currentPostType }
								/>
							</div>
						) ) }
				</div>
			) ) }
		</div>
	);
};

const PluginDocumentSetting = () => {
	const { postType, taxonomies, terms } = useSelect( ( select ) => {
		// @ts-ignore
		const { getTaxonomies, getEntityRecords } = select( coreStore );
		// @ts-ignore
		const _postType = select( editorStore ).getCurrentPostType() as string;
		const _taxonomies = ( getTaxonomies( { per_page: -1 } ) || [] ).filter(
			// @ts-ignore
			( taxonomy ) => taxonomy.types.includes( _postType )
		) as Taxonomy[];
		const _terms = Object.fromEntries(
			_taxonomies.map( ( taxonomy ) => {
				const taxonomyTerms = getEntityRecords(
					'taxonomy',
					taxonomy.slug,
					{
						per_page: -1,
					}
				)?.filter(
					(
						// @ts-ignore
						{ meta: { schedule_terms_active: scheduleTermsActive } }
					) => scheduleTermsActive
				);
				return [ taxonomy.slug, taxonomyTerms as Term[] ];
			} )
		);

		return {
			postType: _postType,
			taxonomies: _taxonomies,
			terms: _terms,
		};
	} );

	return (
		<PluginDocumentSettingPanel
			name="schedule-terms"
			title={ __( 'Schedule Terms', 'schedule-terms' ) }
			className="schedule-terms"
		>
			<ControlUI
				currentPostType={ postType }
				taxonomies={ taxonomies }
				terms={ terms }
			/>
		</PluginDocumentSettingPanel>
	);
};

registerPlugin( 'schedule-terms', {
	render: PluginDocumentSetting,
	icon: 'clock',
} );
