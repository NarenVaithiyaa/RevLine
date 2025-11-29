export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      events: {
        Row: {
          id: string
          title: string
          description: string | null
          date: string
          venue: string | null
          status: 'upcoming' | 'completed'
          drive_link: string | null
          image_url: string | null
          registration_link: string | null
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          date: string
          venue?: string | null
          status?: 'upcoming' | 'completed'
          drive_link?: string | null
          image_url?: string | null
          registration_link?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          date?: string
          venue?: string | null
          status?: 'upcoming' | 'completed'
          drive_link?: string | null
          image_url?: string | null
          registration_link?: string | null
          created_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
