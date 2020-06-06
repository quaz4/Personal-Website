export interface TimelineEntry {
    'title': string;
    'employmentType'?: string;
    'description': string;
    'start'?: Date;
    'end'?: Date;
    'logo'?: string;
    'links'?: Link[];
    'images'?: Image[];
    'event'?: boolean;
}

interface Link {
    url: string;
    text: string;
}

interface Image {
    src: string;
    thumb: string;
    caption: string;
}
