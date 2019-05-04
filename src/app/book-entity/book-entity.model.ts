export interface BookDetails {
    BookId: string;
    Title: string;
    Cover: string;
    Description: string;
    ReadStatus: string;
    AuthorId: string;
    BookRating;
    AuthorName: string;
    Genre: string;
    ISBN: string;
    Pages: number;
    Published: string;
    Publisher: string;
    message: string;
    success: boolean;
}
export interface AuthorDetails {
    AuthorId: string;
    AuthorName: string;
}
