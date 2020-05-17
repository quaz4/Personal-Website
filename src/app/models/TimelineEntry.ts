export interface TimelineEntry {
    'title': string;
    'description': string;
    'start': Date;
    'end'?: Date;
    'logo'?: string;
    'links'?: string[];
    'images'?: string[];
}
