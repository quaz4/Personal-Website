export interface TimelineEntry {
    'title': string;
    'employmentType'?: string;
    'description': string;
    'start'?: Date;
    'end'?: Date;
    'logo'?: string;
    'links'?: Link[];
    'images'?: string[];
    'event'?: boolean;
}

interface Link {
    url: string;
    text: string;
}
